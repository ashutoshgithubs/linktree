import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <Link
      className="flex items-center justify-center gap-x-2 p-2 transition-all duration-400"
      target="_blank"
      href="/"
    >
      <img
        className="hover:-rotate-45 transition-all duration-400 w-8 h-8"
        src="/svg/LinkRel.svg"
      />
      {/* <img className='hover:-rotate-45 transition-all duration-400' src='/images/favicon.ico'/> */}
      <h5 className="text-indigo-400  font-bold hover:text-indigo-300">
        {" "}
        Try LinkRel
      </h5>
    </Link>
  );
};

export default Footer;
