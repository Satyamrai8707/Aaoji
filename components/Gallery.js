"use client";

import Image from "next/image";

const images = [
  "/images/dish-1.png",
  "/images/dish-2.png",
  "/images/dish_3.png",
  "/images/dish_4.jpg",
  "/images/dish_5.jpg",
  "/images/dish_6.jpg",
  "/images/dish_7.jpg",
  "/images/dish_8.jpg",
  "/images/dish-1.png",
];


export default function Gallery() {
  return (
    <section className="bg-[#e6c88e] py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h3 className="text-[#EA3600] text-lg font-medium uppercase tracking-wider underline underline-offset-4 mb-2">
          Explore Our Gallery
        </h3>
        <h2 className="text-[#EA3600] text-3xl md:text-4xl font-semibold">
          Taste the Story: A Visual Journey Through Our Dishes!
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={src}
              alt={`Dish ${index + 1}`}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#EA3600] text-white px-6 py-2 rounded-full hover:bg-[#c52d00] transition"
        >
          Visit Instagram
        </a>
      </div>
    </section>
  );
}
