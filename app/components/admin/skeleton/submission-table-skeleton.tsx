export function SubmissionsTableSkeleton() {
  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            {/* Header cells */}
            {[...Array(7)].map((_, i) => (
              <th key={i} className="px-6 py-3 text-left">
                <div className="h-4 bg-gray-300 dark:bg-gray-500 rounded w-20 animate-pulse "></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
          {/* Generate 5 skeleton rows */}
          {[...Array(5)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {/* Company */}
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-500 rounded w-32 animate-pulse"></div>
              </td>
              {/* Contact */}
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 dark:bg-gray-500 rounded w-24 animate-pulse"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-500 rounded w-32 animate-pulse"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-500 rounded w-28 animate-pulse"></div>
                </div>
              </td>
              {/* Sector */}
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-500 rounded w-24 animate-pulse"></div>
              </td>
              {/* Revenue */}
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-500 rounded w-20 animate-pulse"></div>
              </td>
              {/* Status */}
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-500 rounded w-16 animate-pulse"></div>
              </td>
              {/* Submitted */}
              <td className="px-6 py-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-500 rounded w-24 animate-pulse"></div>
              </td>
              {/* Actions */}
              <td className="px-6 py-4">
                <div className="h-8 bg-gray-300 dark:bg-gray-500 rounded w-full animate-pulse"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
