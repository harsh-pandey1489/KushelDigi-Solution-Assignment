import React from "react";
import {
    MapPin,
    Mail,
    Phone,

} from "lucide-react";
import media from "../assets/logo/media.png"
import logo from "../assets/images/kushelWhite.png";
import worldimage from "../assets/images/image.png";

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#001D4C] text-white overflow-hidden">


            <img
                src={worldimage}
                alt="world-map"
                className="absolute w-[800px] h-[200px] object-cover "
            />

            <div className="relative max-w-[1200px] mx-auto px-6 py-10">

                {/* ================= TOP SECTION ================= */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-5 border-b border-white/20 pb-10">


                    <div className="flex justify-center lg:justify-start">
                        <img
                            src={logo}
                            alt="Kushel Digi Solutions"
                            className="h-12 object-contain"
                        />
                    </div>


                    <div className="flex items-center gap-3 text-sm">
                        <MapPin size={18} className="text-white" />
                        <span>G-9, First Floor, Sector 63, Noida</span>
                    </div>


                    <div className="flex items-center gap-3 text-sm text-gray-200">
                        <Mail size={18} className="text-white" />
                        <span>Shubham@Kusheldigi.com</span>
                    </div>


                    <div className="flex items-center gap-3 text-sm text-gray-200">
                        <Phone size={18} className="text-white" />
                        <span>9045301702</span>
                    </div>

                </div>

                {/* ================= BOTTOM SECTION ================= */}
                <div className="flex flex-col lg:flex-row items-center gap-[100px] pt-5">


                    <div className=" text-center lg:text-left">

                        <p>© 2023 Kusheldigi. All Rights Reserved.</p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-4">
                            <a href="#" className="hover:text-white transition">About Us</a>
                            <a href="#" className="hover:text-white transition">Insights</a>
                            <a href="#" className="hover:text-white transition">Blog</a>
                            <a href="#" className="hover:text-white transition">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition">Sitemap</a>
                        </div>
                    </div>



                    <div className="">
                        <p className="text-sm mb-5 text-[#FFFFFF]">Follow Us On</p>

                        <img
                            src={media}
                            alt="social media icons"
                            className="h-6 opacity-90 hover:opacity-100 transition"
                        />
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;