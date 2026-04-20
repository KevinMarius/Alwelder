"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const baseUrl = "https://api.whatsapp.com/send/";
  const whatsappNumber = "699848667";
  const encodedMessage =
    "Hello, I am interested in your services. Could you please provide more information?";
  const whatsappUrl = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="flex flex-col items-center gap-2.5">
        <Link
          href={whatsappUrl}
          target="_blank"
          className="block bg-[#54db50] text-sm text-white p-2 leading-none rounded-full font-medium text-nowrap hover:scale-110 transition-transform duration-300"
        >
          <FaWhatsapp className="w-8 h-8" />
        </Link>
        {isVisible && (
          <div
            onClick={scrollToTop}
            className="back-to-top flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary text-white font-semibold shadow-md transition duration-300 ease-in-out hover:bg-indigo-700"
          >
            <span className="mt-[6px] h-4 w-4 rotate-45 border-l border-t border-white"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollToTop;
