"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Suresh Naithani",
    text: "The flavors here are refreshing. Perfect for a nice pit stop!",
  },
  {
    name: "Rekha Dixit",
    text: "Aaoji really stands out! Amazing flavors and hygienic setup.",
  },
  {
    name: "Sarthak Singh",
    text: "Wow! Hot, tasty, and flavorful. My go-to now!",
  },
  {
    name: "Deepika Verma",
    text: "Loved the ambiance and the spicy chaats. Must visit!",
  },
  {
    name: "Ravi Mehra",
    text: "Amazing taste, quick service, and great vibes.",
  },
  {
    name: "Anjali Sharma",
    text: "I always stop at Aaoji when on road trips now!",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#fdf5d9] py-16 px-4 md:px-20 relative" id="testimonials">
      {/* Heading */}
      <div className="text-center mb-10">
        <h3 className="text-[#EA3600] text-lg font-medium uppercase tracking-wider underline underline-offset-4 mb-2">
          Testimonials
        </h3>
        <h2 className="text-[#EA3600] text-3xl md:text-4xl font-semibold">
          Raving reviews: Hear from our happy foodies!
        </h2>
      </div>

      {/* Arrows */}
      <div className="hidden md:flex justify-between items-center absolute top-1/2 left-0 right-0 px-8 -translate-y-1/2 z-10">
        <button
          onClick={scrollLeft}
          className="bg-white border border-[#EA3600] text-[#EA3600] rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#EA3600] hover:text-white transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollRight}
          className="bg-white border border-[#EA3600] text-[#EA3600] rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#EA3600] hover:text-white transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Testimonials Scrollable */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="scroll-snap-start min-w-[300px] max-w-[300px] bg-white border border-[#EA3600] rounded-xl p-6 shadow relative"
          >
            <span className="text-5xl text-[#f5d8ba] font-bold absolute -top-4 left-4">
              “
            </span>
            <p className="text-gray-800 text-base mt-6 mb-4">{review.text}</p>
            <p className="font-semibold text-black">- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
