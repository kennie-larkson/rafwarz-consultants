import { InviteForm } from "../../components/forms/invite-form";
import { InvitesTable } from "../../components/admin/invites-table";

export default function AdminInvitesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Manage Invites</h1>
        <InviteForm />
        <InvitesTable />
      </div>
    </div>
  );
}
