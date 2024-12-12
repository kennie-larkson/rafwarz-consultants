import { SubmissionsTable } from "../components/admin/submissions-table";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Subscription Requests</h1>
        <SubmissionsTable />
      </div>
    </div>
  );
}
