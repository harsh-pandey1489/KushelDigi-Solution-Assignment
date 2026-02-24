import React from "react";
import { FileText, Search, Pen, Code2, ClipboardCheck, Phone } from "lucide-react";

const steps = [
  {
    title: "We Get Your Requirements",
    step: "Step 01",
    icon: <FileText size={24} strokeWidth={1.5} />,
    color: "bg-[#01203D]",
    text: "text-[#01203D]",
    border: "border-[#01203D]",
    position: "top",
  },
  {
    title: "Market Research & Feasibility Analysis",
    step: "Step 02",
    icon: <Search size={24} strokeWidth={1.5} />,
    color: "bg-[#E88605]",
    text: "text-[#E88605]",
    border: "border-[#E88605]",
    position: "bottom",
  },
  {
    title: "Designing & Get Confirmation",
    step: "Step 03",
    icon: <Pen size={24} strokeWidth={1.5} />,
    color: "bg-[#FF5900]",
    text: "text-[#FF5900]",
    border: "border-[#FF5900]",
    position: "top",
  },
  {
    title: "Coding & Development",
    step: "Step 04",
    icon: <Code2 size={24} strokeWidth={1.5} />,
    color: "bg-[#047E96]",
    text: "text-[#047E96]",
    border: "border-[#047E96]",
    position: "bottom",
  },
  {
    title: "Testing & Maintenance",
    step: "Step 05",
    icon: <ClipboardCheck size={24} strokeWidth={1.5} />,
    color: "bg-[#0042F7]",
    text: "text-[#0042F7]",
    border: "border-[#0042F7]",
    position: "top",
  },
];

const WorkingProcess = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6 text-center">

      
        <h2 className="text-[24px] md:text-[30px] tracking-[4px] font-semibold uppercase text-gray-700 mb-16">
          Our Working Process
        </h2>

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="lg:hidden flex flex-col gap-12">

          {steps.map((item, index) => (
            <div key={index} className="flex items-center gap-6">

              {/* Circle */}
              <div className="relative flex items-center justify-center min-w-[90px]">

                <div className={`absolute w-[90px] h-[90px] rounded-full border-2 ${item.border} opacity-30`}></div>

                <div className={`w-[65px] h-[65px] rounded-full flex items-center justify-center text-white ${item.color}`}>
                  {item.icon}
                </div>
              </div>

              {/* Text Right Side */}
              <div className="text-left">
                <p className={`font-bold ${item.text}`}>
                  {item.step}
                </p>
                <p className="text-[#000000] text-sm mt-1">
                  {item.title}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-5 relative">
        

          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center ">

              {/* Top Content */}
              {item.position === "top" && (
                <div className=" flex flex-col">
                  <p className="text-[#000000] text-sm text-center">
                    {item.title}
                  </p>
                  <p className={`font-bold ${item.text}`}>
                    {item.step}
                  </p>
                </div>
              )}

              {/* Top Dot */}
              {item.position === "top" && (
                <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
              )}

             
              <div className="w-[2px] h-6 bg-gray-300"></div>

          
              <div className="relative flex items-center justify-center my-4  ">

                <div className={`absolute w-[140px] h-[140px] rounded-full  border-2 ${item.border} shadow-lg `}></div>

                <div className={`absolute w-[120px] h-[120px] rounded-full border-2 ${item.border} shadow-lg `}></div>

                <div className={`w-[75px] h-[75px] rounded-full flex items-center justify-center text-white shadow-md ${item.color}`}>
                  {item.icon}
                </div>
              </div>

              
              <div className="w-[2px] h-6 bg-gray-300"></div>

              {/* Bottom Dot */}
              {item.position === "bottom" && (
                <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
              )}

              {/* Bottom Content */}
              {item.position === "bottom" && (
                <div className="mt-6 flex flex-col items-center">
                  <p className={`font-bold ${item.text}`}>
                    {item.step}
                  </p>
                  <p className="text-[#000000] text-sm text-center mt-1">
                    {item.title}
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>

      
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">
          <button className="bg-darkBlue text-white px-8 py-3 uppercase tracking-[2px] text-sm hover:opacity-90 transition">
            Quick Enquiry
          </button>

          <button className="bg-primaryBlue text-white px-8 py-3 flex items-center justify-center gap-2 uppercase tracking-[2px] text-sm hover:opacity-90 transition">
            <Phone size={16} />
            9045301702
          </button>
        </div>

      </div>
    </section>
  );
};

export default WorkingProcess;