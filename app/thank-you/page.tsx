import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Thank You!</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Your subscription request has been received. We'll contact you
          shortly.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
