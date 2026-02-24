import React from "react";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full bg-[#F2F2F2] py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE - FORM */}
        <div>
          <h3 className="text-[22px] font-semibold mb-2 text-gray-800">
            Contact Us
          </h3>
          <p className="text-gray-500 mb-8">
            Please Complete The Below Form. We Will Get In Touch With You
          </p>

          <form className="space-y-5">

            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name*" className="bg-white px-4 py-3 rounded-md outline-none" />
              <input type="text" placeholder="Phone Number*" className="bg-white px-4 py-3 rounded-md outline-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input type="email" placeholder="Email Address*" className="bg-white px-4 py-3 rounded-md outline-none" />
              <input type="text" placeholder="Location" className="bg-white px-4 py-3 rounded-md outline-none" />
            </div>

            <input type="text" placeholder="Business Name" className="bg-white px-4 py-3 rounded-md outline-none w-full" />

            <textarea placeholder="Message" rows="4" className="bg-white px-4 py-3 rounded-md outline-none w-full" />

            <div className="bg-white p-4 rounded-md flex items-center gap-3 w-fit">
              <input type="checkbox" />
              <span className="text-sm text-gray-600">I'm Not A Robot</span>
            </div>

            <button className="bg-[#3C7DC8] text-white px-10 py-3 mt-4 flex items-center gap-2">
              Submit
              <ArrowRight size={16} />
            </button>

          </form>
        </div>

        {/* RIGHT SIDE - ADDRESS */}
        <div>
          <div className="flex gap-8 border-b pb-4 mb-8">
            <button className="text-[#3C7DC8] text-[18px] font-[700]">
              Address
            </button>
            <button className="text-black text-[18px] font-[700]">
              Google Maps
            </button>
          </div>

          <div className="space-y-8">

            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
                <MapPin size={20} className="text-[#3C7DC8]" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">OUR LOCATION</p>
                <p className="text-gray-600 text-sm">
                  G-9, First Floor, Sector 63, Noida
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
                <Mail size={20} className="text-[#3C7DC8]" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">SEND US MAIL</p>
                <p className="text-gray-600 text-sm">
                  info@kusheldigi.com
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
                <Phone size={20} className="text-[#3C7DC8]" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">CALL US</p>
                <p className="text-gray-600 text-sm">
                  +91 9045301702
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;