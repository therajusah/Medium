import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { SignupInput } from "@therajusah/medium-common";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="flex flex-col justify-center h-screen bg-slate-200">
      <div className="flex justify-center">
        <div className="px-10 max-w-md w-full">
          <div className="text-3xl font-extrabold">
            {type === "signup" ? "Create an Account" : "Sign In to your Account"}
          </div>
          <div className="text-slate-500 mb-4">
            {type === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}
            <Link
              to={type === "signin" ? "/signup" : "/signin"}
              className="text-black underline pl-2"
            >
              {type === "signin" ? "Sign up" : "Sign in"}
            </Link>
          </div>
          <div className="pt-4">
            {type === "signup" && (
              <LabelledInput
                label="Name"
                placeholder="Raju Kumar..."
                onChange={(e) => {
                  setPostInputs((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
                value={postInputs.name || ""}
              />
            )}
            <LabelledInput
              label="Email"
              placeholder="example@example.com"
              onChange={(e) => {
                setPostInputs((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
              value={postInputs.email || ""}
            />
            <LabelledInput
              label="Password"
              type="password"
              placeholder="Your password..."
              onChange={(e) => {
                setPostInputs((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
              value={postInputs.password || ""}
            />
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full mt-4"
            >
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputProps {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  value,
  type = "text",
}: LabelledInputProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-bold text-black dark:text-white">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5"
        placeholder={placeholder}
        value={value}
        required
      />
    </div>
  );
}
