import React from "react";
import { ArrowRight } from "lucide-react";
import layer1 from '../assets/images/layer1.png'
import layer2 from '../assets/images/layer2.jpg'
const projects = [
  {
    image: layer1, 
    url: "www.2ndAmendment.com",
    desc: "Lorem Ipsum is simply dummy",
  },
  {
    image: layer2,
    url: "www.kickeez.com",
    desc: "Lorem Ipsum is simply dummy",
  },
];

const Portfolio = () => {
  return (
    <section className="relative w-full bg-[#F6F6F6] pt-6 pb-10 overflow-hidden">


      <h1 className=" text-center text-[50px] md:text-[110px]  font-bold text-gray-200 ">
        OUR PORTFOLIO
      </h1>

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">

        <div className="w-full flex flex-col justify-center items-center">
               <h2 className="text-[22px] md:text-[28px] tracking-[4px] font-semibold uppercase text-gray-700 ">
          Our Portfolio
        </h2>

        <p className="text-[#404040] w-[380px] md:w-[450px] mb-12 font-[400] text-[18px]">
          We design project designed with passion on time,
          within budget of full value
        </p>
        </div>
       

        {/* Portfolio Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-white md:w-[500px] rounded-md shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
            >
              
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.url}
                  className="w-[500px] h-[260px] object-cover"
                />

            
                <div className="absolute top-[250px] right-4 w-10 h-10 rounded-full bg-primaryBlue flex items-center justify-center text-white cursor-pointer hover:scale-105 transition">
                  <ArrowRight size={18} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="font-semibold text-gray-800">
                  {item.url}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-2 h-2 rounded-full bg-primaryBlue"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>


        <div className="mt-10">
          <button className="bg-primaryBlue text-white px-8 py-3 text-sm uppercase tracking-[2px] hover:opacity-90 transition">
            Let's Get Together →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;