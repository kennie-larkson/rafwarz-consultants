"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Replace with your actual login logic
    if (email === "admin@example.com" && password === "password") {
      document.cookie = "rafwarz-admin-auth-token=your_token_here; path=/"; // Set a cookie
      router.push("/admin"); // Redirect to admin page
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to Home
      </Link>
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-3/4 md:w-1/2"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded dark:bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded dark:bg-gray-700"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
