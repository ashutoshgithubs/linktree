import Link from "next/link";
import React from "react";

const LinkTreeCard = ({ title, url, image }) => {
  return (
    <>
      <span className="w-full">
        <Link
          className="flex flex-row items-center p-2 rounded-xl text-white bg-indigo-400 hover:bg-indigo-300 mb-3 mx-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-500"
          target="_blank"
          // href={`https://${url}`}
          href={`${url}`}
        >
          <img
            className="bg-white rounded-md p-1 w-11 mr-5"
            src="/images/favicon.png"
            alt=""
          />
          <h4 className="md:text-lg">{title}</h4>
        </Link>
      </span>
    </>
  );
};

export default LinkTreeCard;
