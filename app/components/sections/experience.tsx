export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Decades of Excellence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            With over 20 years of experience in Management Consultancy and Tax
            Practicing, we've established ourselves as leaders in the industry,
            working with various government agencies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-500 mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-500 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Government Agencies
              </div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-500 mb-2">
                ₦500B+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Revenue Collected
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
