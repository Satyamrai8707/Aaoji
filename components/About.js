// components/AboutSection.js
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-[#fdf8e7] py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="rounded-[60px_0_0_0] overflow-hidden">
            <Image
              src="/images/dish-1.png"
              alt="Pizza"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-[0_60px_0_0] overflow-hidden">
            <Image
              src="/images/dish-2.png"
              alt="Noodles"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-[0_0_0_60px] overflow-hidden">
            <Image
              src="/images/dish_3.png"
              alt="Kebab"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-[0_0_60px_0] overflow-hidden">
            <Image
              src="/images/dish_4.jpg"
              alt="Mint Drink"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Text Content */}
        <div>
          <p className="text-orange-700 font-semibold tracking-wide mb-2">
            — The Story
          </p>
          <h2 className="text-4xl font-bold text-red-700 mb-6">
            What Aaoji is all about!
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Founded in 2020, Aaoji was born out of a passion for bringing
            authentic, bold flavors to the streets, offering a fun twist on
            traditional cuisine. We’ve quickly become a favorite destination for
            locals and travelers alike, serving up not just meals, but
            unforgettable experiences. Whether you're stopping by for a quick
            bite or settling in for a leisurely meal, we take pride in offering
            delicious dishes made from the finest, locally sourced ingredients.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="./ContactForm"
              className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-full transition"
            >
              Call Us for Bookings
            </Link>
            <Link
              href="/menu"
              className="text-orange-700 hover:underline text-lg font-medium"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
