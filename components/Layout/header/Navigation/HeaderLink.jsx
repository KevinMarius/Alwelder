"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";

const HeaderLink = ({ item }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <div className="relative">
      <LinkScroll
        to={item.href.substring(1)}
        smooth={true}
        duration={300}
        onSetActive={() => setActiveLink(item.href.substring(1))}
        offset={-80}
        className={`text-base flex py-2 text-md cursor-pointer animation-hover
                ${
                  activeLink === item.href.substring(1)
                    ? " text-primary animation-active "
                    : " text-dark hover:text-primary"
                } font-semibold  dark:hover:text-primary text-black dark:text-white `}
      >
        {item.label}
      </LinkScroll>
    </div>
  );
};

export default HeaderLink;
