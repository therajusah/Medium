import { Hono, Context } from "hono";
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { verify } from "hono/jwt";

declare const process: {
  env: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
};

interface CustomContext extends Context {
  userId?: string;
}

export const blogRouter = new Hono<{
  Bindings: { DATABASE_URL: string; JWT_SECRET: string };
}>();
blogRouter.use("/*", async (c: CustomContext, next) => {
  const authHeader = c.req.header("authorization") || "";

  try {
    const user = await verify(authHeader, c.env.JWT_SECRET);

    if (user) {
      c.set("userId", user.id);
      await next();
    } else {
      c.status(403);
      return c.json({ message: "You are not logged in" });
    }
  } catch (error) {
    c.status(403);
    return c.json({ message: "You are not logged in" });
  }
});

// Create
blogRouter.post("/post", async (c: CustomContext) => {
  const body = await c.req.json();
  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: authorId!,
      },
    });
    c.status(201);
    return c.json({ id: post.id });
  } catch (error) {
    console.error(error);
    c.status(500);
    return c.json({ message: "Error creating post" });
  }
});

// Update
blogRouter.put("/post/:id", async (c: CustomContext) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const post = await prisma.post.update({
      where: { id: parseInt(c.req.param("id"), 10) },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json(post);
  } catch (error) {
    console.error(error);
    c.status(404);
    return c.json({ message: "Post not found or error updating" });
  }
});

// Fetch a specific post by ID
blogRouter.get("/post/:id", async (c: CustomContext) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(c.req.param("id"), 10) },
    });
    if (!post) {
      c.status(404);
      return c.json({ message: "Post not found" });
    }
    return c.json(post);
  } catch (error) {
    console.error(error);
    c.status(500);
    return c.json({ message: "Error fetching post" });
  }
});

// Fetch all post
blogRouter.get("/post", async (c: CustomContext) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const post = await prisma.post.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({ post });
  } catch (error) {
    console.error(error);
    c.status(500);
    return c.json({ message: "Error fetching post" });
  }
});
