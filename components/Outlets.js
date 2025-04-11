"use client";

import { useState } from "react";
import Image from "next/image";

const outlets = [
  {
    title: "Gianis Red Icecream",
    image: "/images/outlet_1.jpeg",
  },
  {
    title: "Gianis Blue Icecream",
    image: "/images/outlet_2.png",
  },
  // Add more if needed
];

export default function OutletsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = outlets.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#d6c176] py-16 px-4 md:px-20 transition-all duration-300 ease-in-out">
      {/* Headings */}
      <div className="text-center mb-10">
        <h3 className="text-[#9d2d1a] text-sm font-medium uppercase tracking-widest underline underline-offset-4 mb-2">
          Outlets
        </h3>
        <h2 className="text-[#9d2d1a] text-3xl md:text-4xl font-semibold">
          Relish Every <span className="italic">Sweet</span> Bite with Giani&apos;s
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative flex justify-center items-center max-w-5xl mx-auto">
        {/* Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
              aria-label="Previous slide"
            >
              &#8249;
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
              aria-label="Next slide"
            >
              &#8250;
            </button>
          </>
        )}

        {/* Slide Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {outlets
            .slice(currentIndex, currentIndex + 2)
            .concat(
              currentIndex + 1 === total
                ? [outlets[0]]
                : currentIndex + 2 > total
                ? [outlets[(currentIndex + 1) % total]]
                : []
            )
            .map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={400}
                  className="w-full h-[300px] object-cover"
                />
                <div className="text-center p-4 text-black font-medium text-lg">
                  {item.title}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {outlets.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-1.5 rounded-full transition-all duration-200 ${
              currentIndex === i ? "bg-[#333]" : "bg-[#b4a162]"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
