import React from "react";
import reactLogo from "../assets/logo/reactLogo.png";
import flutterLogo from "../assets/logo/flutterLogo.png";

import wordpressLogo from "../assets/logo/wordpress.png";
import phpLogo from "../assets/logo/php.png";
import laravelLogo from "../assets/logo/laravel.png";
import androidLogo from "../assets/logo/android.png";
import appleLogo from "../assets/logo/apple.png";

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

    
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {platforms.map((logo, index) => (
            <div
              key={index}
              className="w-[110px] h-[110px] bg-white rounded-md shadow-sm flex items-center justify-center hover:shadow-md transition"
            >
              <img
                src={logo}
                alt="platform"
                className="w-[55px] h-[55px] object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WeUsePlatform;