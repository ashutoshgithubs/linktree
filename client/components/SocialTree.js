import Link from "next/link";
import React from "react";

const SocialTree = ({ social }) => {
  const { facebook, twitter, instagram, youtube, linkedin, github } = social;
  return (
    <>
      <div className="social flex flex-row justify-center my-4">
        {facebook && (
          <Link
            className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none"
            target="_blank"
            href={`https://facebook.com/${facebook}`}
          >
            <img className="w-6" src="/svg/facebook.svg" />
          </Link>
        )}
        {instagram && (
          <Link
            className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none"
            target="_blank"
            href={`https://instagram.com/${instagram}`}
          >
            <img className="w-6" src="/svg/ig.svg" />
          </Link>
        )}
        {youtube && (
          <Link
            className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none"
            target="_blank"
            href={`https://youtube.com/${youtube}`}
          >
            <img className="w-6" src="/svg/youtube.svg" />
          </Link>
        )}
        {linkedin && (
          <Link
            className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none"
            target="_blank"
            href={`https://linkedin.com/${linkedin}`}
          >
            <img className="w-6" src="/svg/linkedin.svg" />
          </Link>
        )}
        {github && (
          <Link
            className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none"
            target="_blank"
            href={`https://github.com/${github}`}
          >
            <img className="w-6" src="/svg/github.svg" />
          </Link>
        )}
        {twitter && (
          <Link
            className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none"
            target="_blank"
            href={`https://twitter.com/${twitter}`}
          >
            <img className="w-6" src="/svg/twitter.svg" />
          </Link>
        )}
      </div>
    </>
  );
};

export default SocialTree;
