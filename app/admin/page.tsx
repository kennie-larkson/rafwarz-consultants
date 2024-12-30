"use client";
import { useState } from "react";
import { SubmissionsTable } from "../components/admin/submissions-table";
import { InvitesTable } from "../components/admin/invites-table";
import { InviteForm } from "../components/forms/invite-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("submissions");

  const handleLogout = () => {
    // Clear the token by setting it to an empty string
    document.cookie =
      "rafwarz-admin-auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    // Redirect to the login page
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <div className=" flex w-full justify-between">
          <Link
            href="/"
            className="text-blue-500 hover:underline mb-4 inline-block"
          >
            &larr; Back to Home
          </Link>
          <button
            onClick={handleLogout}
            className="mb-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
        <div className="mb-4">
          <button
            onClick={() => setActiveTab("submissions")}
            className={`mr-4 py-2 px-4 rounded ${
              activeTab === "submissions"
                ? "bg-blue-500 text-white"
                : "bg-gray-400 text-black"
            }`}
          >
            Subscription Requests
          </button>
          <button
            onClick={() => setActiveTab("invites")}
            className={`py-2 px-4 rounded ${
              activeTab === "invites"
                ? "bg-blue-500 text-white"
                : "bg-gray-400 text-black"
            }`}
          >
            Manage Invites
          </button>
        </div>

        {activeTab === "submissions" && <SubmissionsTable />}
        {activeTab === "invites" && (
          <>
            <InviteForm />
            <InvitesTable />
          </>
        )}
      </div>
    </div>
  );
}
