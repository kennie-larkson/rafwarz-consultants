export function ServicesSection() {
  const services = [
    {
      title: "Management Consultancy",
      description:
        "Describes the service as providing expert guidance to enhance business operations and strategy",
      icon: "📊",
    },
    {
      title: "Tax Practicing",
      description:
        "Focuses on comprehensive tax planning and compliance services.",
      icon: "📊",
    },
    {
      title: "Revenue Strategy",
      description:
        "Comprehensive revenue collection strategy development and implementation",
      icon: "📊",
    },
    {
      title: "Process Optimization",
      description: "Streamlining collection processes for maximum efficiency",
      icon: "⚡",
    },
    {
      title: "Compliance Management",
      description:
        "Ensuring adherence to regulatory requirements and best practices",
      icon: "✓",
    },
    {
      title: "Digital Transformation",
      description: "Modernizing revenue collection through digital solutions",
      icon: "💻",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
