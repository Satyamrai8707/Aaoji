"use client";

import Image from "next/image";

export default function Menu() {
  return (
    <section className="bg-[#fdf2e9] py-16 px-4 md:px-20">
      <div className="text-center mb-10">
        <h3 className="text-[#e95a2c] text-sm font-medium uppercase tracking-wider underline underline-offset-4 mb-2">
          Explore Our Menu
        </h3>
        <h2 className="text-[#ac2c10] text-3xl md:text-4xl font-semibold">
          Explore the Magic of Our <span className="italic">Savory Creations</span>
        </h2>
      </div>

      {/* Menu Image with Arrows */}
    

        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/menu.png"
            alt="Menu"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
  

      {/* Dots */}
      <div className="flex justify-center space-x-2 mb-6">
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="/menu/menu-image.png"
          download
          className="text-[#e95a2c] underline font-medium hover:text-[#c53e18] transition"
        >
          Download Menu
        </a>
        <button className="bg-[#e95a2c] text-white px-6 py-2 rounded-full hover:bg-[#c53e18] transition">
          Call Us for Bookings
        </button>
      </div>
    </section>
  );
}
