import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#e0c87a] pt-10 lg:pt-20 pb-16 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Text Content */}
        <div className="text-[#872b16]">
          <p className="text-lg font-semibold mb-2 border-l-4 border-[#872b16] pl-2">
            Aaoji:
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Bold Flavors, Fun Vibes,<br />Authentic Taste
          </h1>
          <p className="text-[#504320] text-lg mb-8">
            Aaoji is your perfect pit stop on the highway, serving up bold,
            authentic flavors that are fast, fun, and full of taste. Whether
            you're craving a quick bite or a satisfying meal on the go, Aaoji
            brings the perfect blend of tradition and excitement to your
            journey. Stop by for a flavorful adventure – no detours needed!
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href="ContactForm"
              className="bg-white text-[#872b16] hover:bg-[#faf4df] font-semibold py-3 px-6 rounded-full shadow transition"
            >
              Call Us for Bookings
            </Link>
            <Link
              href="#Menu"
              className="text-[#872b16] underline hover:text-[#b5482b] font-medium"
            >
              Explore Menu
            </Link>
          </div>

          {/* Optional Decorative Line and Icon */}
          <div className="mt-6">
            <div className="w-32 h-0.5 bg-[#872b16] mb-2"></div>
            <div className="text-center text-[#872b16] text-sm">
              ❀
            </div>
          </div>
        </div>

        {/* Right Image with Custom Border Radius */}
        <div className="relative w-full h-full max-w-xl mx-auto">
          <div className="overflow-hidden rounded-tl-[250px] rounded-bl-[0px] rounded-tr-[0px] rounded-br-[0px] border-[12px] border-[#6a0f0f]">
            <Image
              src="/images/outlet_png" // replace with actual image
              alt="Hero Dish"
              width={800}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
