import React from "react";
import { Check, ArrowRight } from "lucide-react";
import person from "../assets/images/person2.png";

const points = [
  "99.9% Uptime with web acceleration. Caching and compression enabled High-Traffic Websites & Apps development service to scale up sales and support hundreds of thousands of users in a fast, reliable manner.",
  "Clear terms and conditions, Robust data security to protect your customers' information. Providing Complete Ownership and Control your project. No Fake Commitment, Delivery on time.",
  "Free Website Audit, Quick Review, 24x7 tech support. Easy to use complete Website Application end-to-end Analytics With Accelerated Mobile Pages (AMP).",
  "Use of Latest technologies like React Web Development, Vue JS Web Development, NodeJS Web Developers for web development & Website design service in India.",
  "Website UX Ui Design, Wireframing, Prototyping in figma before actually developing the webpages to make sure we're heading towards the right direction.",
];

const WeAreKnowFor = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">


        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={person}
            alt="person"
            className="rounded-full w-[220px] h-[220px] md:w-[350px] md:h-[350px] object-cover"
          />
        </div>

        {/* LEFT SIDE CONTENT */}
        <div className="order-2 md:order-1">

          <h2 className="text-[24px] md:text-[34px] font-semibold uppercase text-[#2B2B2B] mb-8">
            WE ARE KNOW FOR
          </h2>

          <div className="space-y-6">
            {points.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">

                <div className="mt-1 min-w-[18px] h-[18px] rounded-full bg-[#22C55E] flex items-center justify-center">
                  <Check size={12} strokeWidth={3} className="text-white" />
                </div>

                <p className="text-[#404040] text-[14px] md:text-[15px] leading-[1.8]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button className="bg-[#3C7DC8] text-white px-10 py-3 text-sm uppercase tracking-[2px] flex items-center gap-2 hover:opacity-90 transition">
              CALL NOW
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WeAreKnowFor;