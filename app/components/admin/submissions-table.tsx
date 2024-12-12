"use client";

import { Suspense, useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { SubmissionsTableSkeleton } from "./skeleton/submission-table-skeleton";

interface Submission {
  id: number;
  company_name: string;
  contact_person: string;
  email: string;
  phone: string;
  business_sector: string;
  annual_revenue: string;
  status: string;
  created_at: string;
}

export function SubmissionsTableContent() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  //const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSubmissions();
  }, []);

  async function fetchSubmissions() {
    try {
      // Add artificial delay to see the skeleton
      //await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 second delay

      const response = await fetch("/api/admin/submissions");
      if (!response.ok) throw new Error("Failed to fetch submissions");
      const data = await response.json();
      setSubmissions(data);
    } catch (err) {
      setError("Failed to load submissions");
      console.error(err);
    }
    /*  finally {
      setIsLoading(false);
    } */
  }

  async function updateStatus(id: number, newStatus: string) {
    try {
      const response = await fetch(`/api/admin/submissions/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error("Failed to update status");

      // Refresh submissions after update
      fetchSubmissions();
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  }

  //if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Sector
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Revenue
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Submitted
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {submission.company_name}
              </td>
              <td className="px-6 py-4">
                <div>{submission.contact_person}</div>
                <div className="text-sm text-gray-500">{submission.email}</div>
                <div className="text-sm text-gray-500">{submission.phone}</div>
              </td>
              <td className="px-6 py-4">{submission.business_sector}</td>
              <td className="px-6 py-4">{submission.annual_revenue}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${
                    submission.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : submission.status === "approved"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submission.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {formatDistanceToNow(new Date(submission.created_at), {
                  addSuffix: true,
                })}
              </td>
              <td className="px-6 py-4">
                <select
                  value={submission.status}
                  onChange={(e) => updateStatus(submission.id, e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SubmissionsTable() {
  return (
    <Suspense fallback={<SubmissionsTableSkeleton />}>
      <SubmissionsTableContent />
    </Suspense>
  );
}
