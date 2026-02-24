import React from "react";
import reactLogo from "../assets/logo/reactLogo.png";
import flutterLogo from "../assets/logo/flutterLogo.png";

import wordpressLogo from "../assets/logo/wordpress.png";
import phpLogo from "../assets/logo/php.png";
import laravelLogo from "../assets/logo/laravel.png";
import androidLogo from "../assets/logo/android.png";
import appleLogo from "../assets/logo/apple.png";
import { ArrowRight } from "lucide-react";
const platforms = [
  reactLogo,
  flutterLogo,
  wordpressLogo,
  phpLogo,
  laravelLogo,
  androidLogo,
  appleLogo,
];

const WeUsePlatform = () => {
  return (
    <section className="w-full pb-8 pt-10 bg-[#F6F6F6] ">
      <div className="max-w-[1400px] mx-auto text-center">

        {/* Heading */}
        <h2 className="text-[28px] md:text-[32px] font-semibold tracking-[2px] uppercase text-gray-700 mb-8">
          We Use This Platform
        </h2>

    
        <div
  className="
    flex relative w-full
    gap-6 md:gap-12
    overflow-x-auto md:overflow-visible
    whitespace-nowrap
    px-4
    justify-start md:justify-center
    scrollbar-hide
  "
>
  {platforms.map((logo, index) => (
    <div
      key={index}
      className="
        min-w-[110px] h-[110px]
        bg-white rounded-md shadow-sm
        flex items-center justify-center
        hover:shadow-md transition
      "
    >
      <img
        src={logo}
        alt="platform"
        className="w-[55px] h-[55px] object-contain"
      />
    </div>
  ))}

  <div className="hidden md:flex absolute top-[20px] right-0 w-10 h-10 rounded-full bg-primaryBlue items-center justify-center text-white cursor-pointer hover:scale-105 transition">
    <ArrowRight size={18} />
  </div>
</div>

      </div>
    </section>
  );
};

export default WeUsePlatform;