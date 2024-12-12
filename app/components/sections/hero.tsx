import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            RAFWARZ INNOVATIVE
            <span className="block text-blue-400">MANAGEMENT CONSULTANTS</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Decades of Excellence in Revenue Collection Solutions
          </p>
          {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors">
            Get Started
          </button> */}
          <Link
            href="/subscribe"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-black to-transparent" />
    </section>
  );
}
