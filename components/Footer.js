import { FaInstagram, FaXTwitter, FaFacebookF } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-[#DEC26C] text-gray-800 pt-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        
        {/* Logo and tagline */}
        <div>
          <img src="/aaoji-logo.png" alt="Aaoji Logo" className="w-48 mb-4" />
          <p className="text-lg font-medium">
            Bold Flavors, Fun Vibes,<br />Authentic Taste
          </p>
          <div className="flex gap-4 mt-4 text-[#540000]">
            <a href="#" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 hover:text-[#EA3600] transition" />
            </a>
            <a href="#" aria-label="Twitter/X">
              <FaXTwitter className="w-6 h-6 hover:text-[#EA3600] transition" />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="w-6 h-6 hover:text-[#EA3600] transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-[#EA3600] mb-2">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Gallery</a></li>
          </ul>
        </div>

        {/* Get in touch */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-[#EA3600] mb-2">GET IN TOUCH</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p className="mt-4">Lorem ipsum dolor sit</p>
          <p className="mt-2 font-semibold">+91 12461234567899</p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-[#EA3600] mb-2">OPENING HOURS</h3>
          <p>Mon to Sun: 12PM to 12AM</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#540000] text-white text-center py-4 mt-10 text-sm">
        © 2025 Aaoji. All Rights Reserved. Designed & Developed by Eazotel
      </div>
    </footer>
  )
}
