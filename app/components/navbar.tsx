"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blogs" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
        role="navigation"
        aria-label="Main Navigation"
      >
        <Link href="/" className="text-xl font-bold text-[#215759]">
          Cyan HealthCare
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#215759] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-gray-700 hover:text-[#215759] transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button className="text-[#215759] border border-[#215759] px-4 py-1 rounded-md hover:bg-[#215759] hover:text-white transition">
              Sign In
            </button>
          </li>
          <li>
            <button className="bg-[#215759] text-white px-4 py-1 rounded-md hover:bg-[#1a443f] transition">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="md:hidden px-4 pb-4 space-y-3 transition-all duration-300"
          role="menu"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-gray-700 hover:text-[#215759] transition"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-2">
            <button className="flex-1 text-[#215759] border border-[#215759] px-4 py-1 rounded-md hover:bg-[#215759] hover:text-white transition">
              Sign In
            </button>
            <button className="flex-1 bg-[#215759] text-white px-4 py-1 rounded-md hover:bg-[#1a443f] transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
