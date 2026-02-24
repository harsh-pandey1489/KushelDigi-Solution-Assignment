import React from "react";
import { ArrowRight } from "lucide-react";

const Consultation = () => {
  return (
    <section className="w-full bg-[#0C3A56] py-20 text-center">
      <div className="max-w-[900px] mx-auto px-6">
        
        <h2 className="text-white text-[28px] md:text-[34px] font-semibold mb-4">
          Get Free Consultation
        </h2>

        <p className="text-[#C6D4E0] text-[16px] mb-8">
          Book An Appointment With Our Team Through Google Meet / Zoom Call
        </p>

        <button className="bg-[#2F7DBF] hover:bg-[#2569A4] transition text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto">
          Schedule a meeting
          <ArrowRight size={16} />
        </button>

      </div>
    </section>
  );
};

export default Consultation;