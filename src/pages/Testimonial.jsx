import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import person1 from "../assets/images/person1.png"; // replace


const testimonials = [
  {
    name: "Harriet Mitchell",
    role: "Director of inbrew",
    text: "Lorem ipsum is simply dummy text of the printing & Typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, an unknown printer took a gallery.",
    image: person1,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="w-full bg-[#EBF3FA] py-18">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-[#101010] text-sm">
            Testimonials
          </p>
          <h2 className="text-[24px] md:text-[30px] font-semibold mt-2">
            OUR HAPPY CLIENT SAY
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

    
          <div>

      
            <div className="flex items-center gap-4 mb-6">

              <img
                src={testimonials[index].image}
                alt="client"
                className="w-20 h-20 rounded-full object-cover"
              />

              <div className="flex gap-3">
                <button className="w-9 h-9 rounded-full bg-[#9DA1A7] shadow flex items-center justify-center hover:bg-gray-900">
                  <ArrowLeft size={18} className="text-white" />
                </button>
                <button className="w-9 h-9 rounded-full bg-primaryBlue text-white shadow flex items-center justify-center hover:opacity-90">
                  <ArrowRight size={18} className="text-white" />
                </button>
              </div>

            </div>

           
            <p className="text-gray-600 leading-[1.8] mb-6">
              {testimonials[index].text}
            </p>

            {/* Name */}
            <h3 className="text-lg font-semibold">
              {testimonials[index].name}
            </h3>
            <p className="text-gray-500 text-sm">
              {testimonials[index].role}
            </p>

      
            <div className="flex gap-2 mt-6">
              <span className="w-2 h-2 rounded-full bg-[#3C7DC8]"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            </div>

          </div>

          {/* RIGHT SIDE (Video) */}
          <div className="relative pl-6">

            <div className="rounded-tr-[60px] md:w-[500px]  overflow-hidden bg-amber-900 shadow-lg">
              <img
                src='/video'
                alt="video"
                className="w-full h-[350px] object-cover"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition">
                <Play size={20} className="text-[#3C7DC8]" />
              </div>
            </div>

           
            <div className="flex justify-center gap-2 mt-6">
              <span className="w-2 h-2 rounded-full bg-[#3C7DC8]"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonial;