export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Ready to transform your business with expert management consultancy
            or tax services? Contact us today to discuss how we can help you
            achieve your goals.
          </p>
          <div className="space-y-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors w-full sm:w-auto">
              Contact Us
            </button>
            <div className="text-gray-600 dark:text-gray-400">
              <p>Email: contact@rafwarz.com</p>
              <p>Phone: +234 (0) 123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
