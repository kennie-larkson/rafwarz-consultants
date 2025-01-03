import Link from "next/link";
import { SubscriptionForm } from "../components/forms/subscription-form";

export default function SubscribePage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="text-blue-500 hover:underline mb-4 inline-block w-full pl-36"
        >
          &larr; Back to Home
        </Link>
        <SubscriptionForm />
      </div>
    </div>
  );
}
