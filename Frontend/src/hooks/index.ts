import { useEffect, useState } from "react";
import axios from 'axios';
import { BACKEND_URL } from "../cofig"; 

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]); 
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    throw new Error("Authorization token not found.");
                }

                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/post`, {
                    headers: {
                        Authorization: token
                    }
                });

                setBlogs(response.data.post);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
                setLoading(false);
            }
        };

        fetchBlogs();
        return () => {
            setBlogs([]); 
        };
    }, []); 

    return {
        loading,
        blogs,
        error,  
    };
};
