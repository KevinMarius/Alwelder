import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkmode relative z-1 border-t border-dark_border px-6 fixed bottom-0 w-full">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12">
          <div className="md:col-span-4 sm:col-span-6 col-span-12 sm:border-r border-b border-solid border-dark_border flex items-center sm:border-b-0 sm:min-h-25 py-10 shrink-0 ">
            <div className="sm:content-normal sm:text-start text-center content-center sm:w-auto w-full">
              <Link href="/" className="md:block flex justify-center">
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={70}
                  height={70}
                  unoptimized
                />
              </Link>
              <h2 className="text-white py-10 text-[40px] leading-tight font-bold">
                Ready to get started?
              </h2>
              <Link
                href="#"
                className="px-9 py-3 rounded-lg bg-primary text-white hover:bg-indigo-700 hover:shadow-none"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 sm:col-span-6 col-span-12 sm:flex items-center sm:min-h-25 py-10 justify-center shrink-0 md:border-r border-b sm:border-b-0 border-solid border-dark_border">
            <div className="flex flex-col md:items-start items-center">
              <span className="text-lg font-bold text-white pb-4 inline-block">
                Support
              </span>
              <div className="pb-5 sm:block flex">
                <p className="text-base font-bold text-white">Phone</p>
                <Link
                  href="tel:+(690) 2560 0020"
                  className="text-xl text-white/50 hover:text-white"
                >
                  +(237) 699 848 667
                </Link>
              </div>
              <div className="sm:block flex items-center gap-3">
                <p className="text-base font-bold text-white">Email</p>
                <Link
                  href="mailto:info@venus.com"
                  className="text-xl text-white/50 hover:text-white"
                >
                  arnold.jiokeng@yahoo.com
                </Link>
              </div>
              <div>
                <ul className="flex items-center gap-3 mt-[1.875rem]">
                  <li className="group">
                    <Link href="#" className="">
                      <FaFacebookF className="h-6 w-6 text-indigo/50 group-hover:text-primary" />
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="#">
                      <FaTwitter className="h-6 w-6 text-indigo/50 group-hover:text-primary" />
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="#">
                      <FaLinkedinIn className="h-6 w-6 text-indigo/50 group-hover:text-primary" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12 border-t md:border-none border-solid border-dark_border sm:flex items-center justify-end md:min-h-25 py-10 shrink-0">
            <div className="md:w-3/4 w-full sm:text-start text-center">
              <span className="font-bold text-white pb-4 inline-block text-2xl">
                Subscribe newsletter
              </span>
              <p className="text-MistyBlue text-base pb-7 text-white/50">
                To be updated with all the latest trends and product
              </p>
              <form className="newsletter-form flex rounded-lg sm:w-full w-3/4 sm:mx-0 mx-auto">
                <input
                  type="email"
                  placeholder="Email*"
                  className="p-4 text-base border-transparent rounded-s-lg rounded-e-none! outline-0 focus:border-primary dark:focus:border-primary w-[calc(100%_-_137px)] flex bg-white dark:bg-midnight_text dark:text-white dark:border-solid dark:border dark:border-border_color"
                />
                <button
                  type="submit"
                  className="p-[0.525rem] text-base font-medium bg-primary text-white border-none cursor-pointer rounded-e-lg outline-0 text-center w-[8.5625rem] hover:bg-indigo-700 hover:shadow-none"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center gap-4 md:gap-0 flex-wrap p-7 border-t border-solid border-dark_border">
        <div>
          <ul className="flex justify-center mb-4 items-center sm:gap-7 gap-3">
            <li className="text-base text-white/50">
              <Link href="#about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li className="text-base text-white/50">
              <Link href="#services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li className="text-base text-white/50">
              <Link href="#portfolio" className="hover:text-primary">
                Portfolio
              </Link>
            </li>
            <li className="text-base text-white/50">
              <Link href="#contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-base text-white/50">
            © All rights reserved. Made by{" "}
            <Link
              href="https://getnextjstemplates.com/"
              className="hover:text-primary"
            >
              Kevin Templates
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
