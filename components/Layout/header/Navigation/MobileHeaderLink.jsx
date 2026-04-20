import Link from "next/link";

import React from "react";

const MobileHeaderLink = ({ item }) => {
  return (
    <Link
      href={item.href}
      className="relative block w-full flex items-center justify-between w-full py-2 px-3 text-black rounded-md dark:text-grey dark:text-opacity-70 focus:outline-hidden"
    >
      {item.label}
    </Link>
  );
};

export default MobileHeaderLink;
