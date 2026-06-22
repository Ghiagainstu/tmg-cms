"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/admin/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: fd.get("username"), password: fd.get("password") }),
      });
      const data = await res.json();
      if (data.ok) {
        router.push("/admin");
      } else {
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Connection error");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">TMG <span className="text-amber-600">CMS</span></h1>
          <p className="text-sm text-gray-500 mt-1">Login to admin dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-gray-500">Username</label>
            <input name="username" required autoComplete="username"
              className="w-full border rounded px-3 py-2 text-sm mt-1" />
          </div>
          <div>
            <label className="text-xs text-gray-500">Password</label>
            <input name="password" type="password" required autoComplete="current-password"
              className="w-full border rounded px-3 py-2 text-sm mt-1" />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 disabled:opacity-50 text-sm font-medium">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
