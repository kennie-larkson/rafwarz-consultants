"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SubscriptionForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");

      router.push("/thank-you");
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Request Consultancy Services</h2>
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Company Name *</label>
          <input
            type="text"
            name="company_name"
            required
            className="w-full p-2 border rounded dark:bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Contact Person *</label>
          <input
            type="text"
            name="contact_person"
            required
            className="w-full p-2 border rounded dark:bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Email *</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border rounded dark:bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Phone *</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full p-2 border rounded dark:bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Business Sector *</label>
          <input
            type="text"
            name="business_sector"
            required
            className="w-full p-2 border rounded dark:bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Annual Revenue</label>
          <select
            name="annual_revenue"
            className="w-full p-2 border rounded dark:bg-gray-700"
          >
            <option value="">Select range</option>
            <option value="< ₦10M">Less than ₦10M</option>
            <option value="₦10M - ₦50M">₦10M - ₦50M</option>
            <option value="₦50M - ₦200M">₦50M - ₦200M</option>
            <option value="₦200M+">₦200M+</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            rows={4}
            className="w-full p-2 border rounded dark:bg-gray-700"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
        >
          {isLoading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
