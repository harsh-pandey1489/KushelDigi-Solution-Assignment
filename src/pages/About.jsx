import React from "react";

const features = [
  {
    title: "Great UI / UX",
    desc: "Our designs have great UI which results in great UX as well.",
  },
  {
    title: "SEO Friendly",
    desc: "Our websites are built with features to help your website rank higher.",
  },
  {
    title: "Clean Coding",
    desc: "Coding is kept clean and optimised as per industry standard.",
  },
  {
    title: "Responsive Design",
    desc: "Our designs are device friendly across all platforms and screen sizes.",
  },
];

const About = () => {
  return (
    <section className="w-full bg-white relative overflow-hidden">

     

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 relative z-10">
          
        {/* LEFT CONTENT */}
        <div className="max-w-[600px]">
          <h2 className=" text-[70px] pb-8 md:pb-1  md:text-[110px] font-bold text-gray-100">
        ABOUT US
      </h2>

          <h3 className="text-[28px] font-[500] mb-4 font-manrope">
            Hire Top Website <br /> <span className="font-[700]">Designers & Developers</span>
          </h3>


          <p className="text-gray-600  pr-3 text-justify leading-[170%] mb-8 text-[16px]">
           If you're looking to hire expert website designers and developers, you've come to the right place to construct a website that stands out in aesthetics and functionality. We have the ability to offer a wide range of services. As we have a comprehensive understanding of website design and exposure across sectors all over the world, we also build websites that provide customers with the best first impression on digital platforms. Here's what we look for when hiring web designers to revitalize your company's online presence.
          </p>

          <button className="bg-darkBlue text-white px-8 py-3 uppercase tracking-[1px]">
            Quick Enquiry
          </button>
        </div>

        {/* RIGHT  */}
        <div className="md:py-35  sm:py-8 grid grid-cols-2 sm:grid-cols-2 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 p-6 rounded-md hover:shadow-lg transition duration-300"
            >
              <h4 className="text-primaryBlue text-center text-[#3C83CB] font-semibold text-[18px] mb-3">
                {item.title}
              </h4>
              <p className="text-gray-600 text-[14px] leading-[160%] text-center">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
        
      </div>
    </section>
  );
};

export default About;