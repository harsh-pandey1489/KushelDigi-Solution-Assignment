import React, { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  "How much does a website consultant cost?",
  "How much should I pay for website design?",
  "How much does a small website cost?",
  "How much does a basic 5 page website cost?",
  "How long does a website take to build?",
  "Is maintaining the website is costly?",
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F4F4F4] py-16">
      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-[26px] md:text-[32px] font-semibold uppercase text-gray-800 tracking-[4px]">
          FREQUENTLY ASKED{" "}
          <span className="text-[#3C7DC8]">QUESTION</span>
        </h2>

        <p className="text-gray-500  mb-14">
          Here are some common queries and question that brands ask.
        </p>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 text-left">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-[#E5E5E5] transition"
              onClick={() => toggle(index)}
            >
              <p className="text-gray-700 text-[15px] font-medium">
                {item}
              </p>

              <div className="w-8 h-8 rounded-full bg-primaryBlue flex items-center justify-center text-white">
                <Plus size={16} />
              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <p className="text-gray-700 text-[18px] mb-6">
            Got More Questions On Your Mind?
          </p>

          <button className="bg-primaryBlue text-white px-10 py-3 uppercase text-sm tracking-[2px] hover:opacity-90 transition">
            Ask Us a question →
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;