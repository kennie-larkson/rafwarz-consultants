"use client";

import { useState, useEffect } from "react";

interface Invitee {
  id: number;
  email: string;
  token: string;
  invited_at: string;
  status: string;
}

export function InvitesTable() {
  const [invitees, setInvitees] = useState<Invitee[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchInvitees();
  }, []);

  async function fetchInvitees() {
    try {
      const response = await fetch("/api/admin/invites");
      if (!response.ok) throw new Error("Failed to fetch invitees");
      const data = await response.json();
      setInvitees(data);
    } catch (err) {
      setError("Failed to load invitees");
      console.error(err);
    }
  }

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left">Email</th>
            <th className="px-6 py-3 text-left">Token</th>
            <th className="px-6 py-3 text-left">Invited At</th>
            <th className="px-6 py-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
          {invitees.map((invitee) => (
            <tr key={invitee.id}>
              <td className="px-6 py-4">{invitee.email}</td>
              <td className="px-6 py-4">{invitee.token}</td>
              <td className="px-6 py-4">
                {new Date(invitee.invited_at).toLocaleString()}
              </td>
              <td className="px-6 py-4">{invitee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
