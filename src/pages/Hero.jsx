import React from "react";

import { Phone, User, Mail, ChevronDown, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="  min-h-[calc(100vh-101px)] bg-[#E9EEF3] py-15 md:px-10 relative">
      <div className=" w-full mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="w-full ">
       
       <div className="flex flex-col">
        <p className="text-[16px] md:text-[18px] font-[500] text-black mb-0">
            Welcome to Kushel Digi
          </p>

          <h1 className="font-bold text-[30px] md:text-[40px] lg:text-[45px] leading-[120%] mb-6 text-black">
            Revolutionising your business
            through Technology.
          </h1>
       </div>
          

          <p className=" w-[80%] text-black text-[16px] font-[500] md:text-[18px] leading-[160%] mb-8">
            We are a leading company, which has been offering technology
            solutions across the globe for almost 5 years.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-darkBlue text-white px-6 py-3 uppercase tracking-[1px] w-full sm:w-auto">
              Quick Enquiry
            </button>

            <button className="bg-primaryBlue text-white px-6 py-3 flex items-center justify-center gap-2 uppercase tracking-[1px] w-full sm:w-auto">
              <Phone size={18} />
              9045301702
            </button>
          </div>

          {/* Services */}
          <div className="text-gray-700 w-[80%] space-y-2 text-[15px] md:text-[16px] flex flex-wrap  ">
            <p>• UI/UX DESIGN</p>
            <p>• WEBSITE & APP DEVELOPMENT</p>
            <p>• E-COMMERCE DEVELOPMENT</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative w-full pt-9">

    <div className="relative w-full flex justify-center lg:justify-end">

  {/* Circle Background */}
  <div className="absolute right-[-30px] bottom-[-80px] w-[500px] h-[500px] bg-[#3C83CB]/40 rounded-full"></div>

  {/* Form Card */}
  <div className="relative bg-gradient-to-b from-[#2B3137] to-[#1F252B] text-white max-w-[662px] shadow-xl">

    <div className="p-8">

      <h2 className="text-[20px] font-semibold text-center mb-1">
        Hire A Top Global Talent To Grow Your Business !
      </h2>

      <p className="text-center text-gray-300 mb-6">
        Get Free Quote
      </p>

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

        <div className="relative">
          <input
            type="text"
            placeholder="Your Name*"
            className="w-full bg-[#EDEDED] text-black p-3 pr-10"
          />
          <User size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Phone Number*"
            className="w-full bg-[#EDEDED] text-black p-3 pr-10"
          />
          <Phone size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

        <div className="relative">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-[#EDEDED] text-black p-3 pr-10"
          />
          <Mail size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Services"
            className="w-full bg-[#EDEDED] text-black p-3 pr-10"
          />
          <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

      </div>

      <p className="mb-3 mt-4 text-gray-300">
        Additional Details
      </p>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

        <div className="relative">
          <input
            type="text"
            placeholder="Select Budget"
            className="w-full bg-[#EDEDED] text-black p-3"
          />
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Best Start Date"
            className="w-full bg-[#EDEDED] text-black p-3 "
          />
          <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

      </div>

    </div>

    {/* Bottom Blue Strip Button */}
    <button className="w-full bg-[#3C83CB] py-4 text-white font-semibold text-center">
      Send a Message
    </button>

  </div>
</div>
        </div>

      </div>
    </section>
  );
};

export default Hero;