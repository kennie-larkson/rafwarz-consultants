"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-500">
            <Link href="/">RAFWARZ</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              href="admin/signup"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Sign Up
            </Link>
            <Link
              href="admin/login"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Sign In
            </Link>
            <Link
              href="/#services"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Services
            </Link>
            <Link
              href="/#experience"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Experience
            </Link>
            <Link
              href="/#contact"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Contact
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <Link
              href="/"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              href="admin/signup"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Sign Up
            </Link>
            <Link
              href="admin/login"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Sign In
            </Link>
            <Link
              href="/#services"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Services
            </Link>
            <Link
              href="/#experience"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Experience
            </Link>
            <Link
              href="/#contact"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
