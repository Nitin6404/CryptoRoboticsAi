'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";

interface User {
    email: string;
    password: string;
}

interface Errors {
    email: string;
    password: string;
}

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState<User>({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Errors>({
        email: "",
        password: "",
    });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/confirmed");
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const validateUser = () => {
        const errors: Errors = {
            email: "",
            password: "",
        };
        if (!emailRegex.test(user.email)) {
            errors.email = "Invalid email address";
        }
        if (!passwordRegex.test(user.password)) {
            errors.password = "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character";
        }
        setErrors(errors);
        return Object.values(errors).every((error) => error === "");
    };

    useEffect(() => {
        const isValid = validateUser();
        setButtonDisabled(!isValid);
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? <Loader2 className="animate-spin" /> : "Login"}</h1>
            <hr />

            <label htmlFor="email">Email</label>
            <input
                className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black ${errors.email ? "border-red-500" : ""
                    }`}
                id="email"
                type="text"
                value={user.email}
                onChange={handleChange}
                placeholder="email"
            />
            {errors.email && <div className="text-red-500">{errors.email}</div>}

            <label htmlFor="password">Password</label>
            <input
                className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black ${errors.password ? "border-red-500" : ""
                    }`}
                id="password"
                type="password"
                value={user.password}
                onChange={handleChange}
                placeholder="password"
            />
            {errors.password && <div className="text-red-500">{errors.password}</div>}

            <button
                onClick={onLogin}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                disabled={buttonDisabled}
            >
                Login here
            </button>
            <Link href="/signup">Visit Signup page</Link>
        </div>
    );
}