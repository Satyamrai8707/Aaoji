"use client"; // If you're using any hook like useState/useEffect
import "@/styles/globals.css";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-red-600">Aaoji</h1>
        <nav className="space-x-6 text-gray-700">
          <Link href="/about">About Us</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contactform">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
