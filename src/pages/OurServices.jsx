import React from "react";
import uiDesign from "../assets/images/ui-design.png"
import Ecommerce from "../assets/images/ecommerce.png"
import webApp from "../assets/images/web-app.png"
import { ArrowRight } from "lucide-react";
const services = [
  {
    title: "UI/UX DESIGN",
    image: uiDesign,
    desc: "An ordinary solution can dominate the Industry with significant design which is why, We at Kushel Digi make sure to provide you with innovative and user- friendly designs.User interface and User Experience design is an integral part of any digital marketing strategy and online enterprise" ,
  },
{
  title: "E-COMMERCE DEVELOPMENT",
    image: Ecommerce,
      desc: "The growth of any business requires the use of e-commerce as a channel and instrument. Everything is now easy to reach and merely a click away. E-commerce solutions have made the relationship between the client and the consumer more effective and user-friendly. This is why integrating E-commerce Solutions in a business has become a necessity and is effective.",
  },
{
  title: "WEBSITE & APP DEVELOPMENT",
    image: webApp,
      desc: ` Our team of experts strives to
develop the ideal website in accordance with your needs and
expectations.  Having a website for your business increases your credibility and awareness among the audiences. We have an excellent team dedicated to design and develop a SEO-friendly and E-commerce website. It will help your clients to understand you and your services better. `
,
  },
];

const OurServices = () => {
  return (
    <section className="w-full bg-white pt-18 pb-15 overflow-hidden">

      {/* Ellipse Background */}
      <div
  className="
    hidden lg:block
    absolute right-[-350px] top-[70rem]
    lg:w-[500px] lg:h-[500px]
    bg-[#3C83CB]/20
    rounded-[60%_40%_55%_45%/50%_60%_40%_50%]
    rotate-6 scale-x-110
  "
></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-semibold tracking-[2px] uppercase text-gray-700">
            Our Services
          </h2>
          <p className="text-gray-500 mt-2">
            We are expert in
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 border rounded-md shadow-sm hover:shadow-lg transition"
            >
             <img src={item.image} alt="" className="w-[80px] h-[80px] mb-4" />
              <h3 className="text-[#3C83CB] font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-[#404040] text-[14px] leading-[160%] mb-6">
                {item.desc}
              </p>

             <div className="flex items-center gap-3 mt-6 group cursor-pointer">
  
  <div className="w-[41px] h-[41px] rounded-full bg-primaryBlue flex items-center justify-center transition group-hover:scale-110">
    <ArrowRight size={18} className="text-white" />
  </div>

  <span className="text-[#525967] font-semibold text-sm group-hover:text-primaryBlue transition">
    Learn More
  </span>

</div>

            </div>
          ))}

        </div>

        {/* Get Started Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-primaryBlue text-white px-10 py-3">
            Get Started →
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurServices;