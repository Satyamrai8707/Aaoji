export default function ContactForm() {
    return (
      <div className="min-h-screen bg-[#FAF3DC] flex items-center justify-center py-10 px-4">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
          
          {/* Map Section */}
          <div className="border border-[#EA3600] rounded-xl flex items-center justify-center h-[500px] text-[#EA3600] text-lg font-medium">
            MAP HERE
          </div>
  
          {/* Form Section */}
          <div className="bg-white p-8 rounded-xl shadow-md w-full">
            <h2 className="text-[#EA3600] text-xl font-semibold mb-6 tracking-wide uppercase">
              Fill in detail/ to book a private party!
            </h2>
  
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your full name*"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA3600]"
              />
  
              <div className="flex gap-2">
                <select className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA3600]">
                  <option value="+91">+91 IND</option>
                  <option value="+1">+1 USA</option>
                  <option value="+44">+44 UK</option>
                </select>
                <input
                  type="tel"
                  placeholder="Mobile number*"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-[#EA3600]"
                />
              </div>
  
              <input
                type="email"
                placeholder="Email ID*"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA3600]"
              />
  
              <textarea
                placeholder="Tell us something about your enquiry!"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#EA3600]"
              ></textarea>
  
              <button
                type="submit"
                className="w-full bg-[#EA3600] text-white py-3 rounded-lg text-lg font-medium hover:bg-[#cc2f00] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
  