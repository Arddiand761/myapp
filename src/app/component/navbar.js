"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Lusitana } from "next/font/google"; // Changed from Lisu_Bosa to Lusitana

// Correct font configuration with required weight
const lusitana = Lusitana({ 
  subsets: ["latin"],
  weight: "400" // or any other available weight: 400 or 700
});

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse group"
        >
          <div className="relative transition-transform duration-300 group-hover:scale-110">
            <Image
              className="rounded-full shadow-md"
              src="/images/logo.png"
              alt="Logo Anaslaw"
              width={50}
              height={50}
            />
          </div>
          <span
            className={`${lusitana.className} self-center text-2xl font-bold text-white whitespace-nowrap group-hover:text-blue-200 transition-colors duration-300`}
          >
            Anaslaw
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Buka menu utama</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white rounded-lg hover:bg-blue-700 hover:text-blue-100 transition-all duration-300 md:hover:bg-transparent md:hover:text-blue-200 md:p-0"
              >
                Beranda
              </Link>
            </li>

            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center py-2 px-3 text-white rounded-lg hover:bg-blue-700 hover:text-blue-100 transition-all duration-300 md:hover:bg-transparent md:hover:text-blue-200 md:p-0"
              >
                Layanan
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link
                      href="/layanan/web"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/layanan/mobile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Mobile Apps
                    </Link>
                    <Link
                      href="/layanan/ui"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      UI/UX Design
                    </Link>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-white rounded-lg hover:bg-blue-700 hover:text-blue-100 transition-all duration-300 md:hover:bg-transparent md:hover:text-blue-200 md:p-0"
              >
                Tentang Kami
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-white rounded-lg hover:bg-blue-700 hover:text-blue-100 transition-all duration-300 md:hover:bg-transparent md:hover:text-blue-200 md:p-0"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
