import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LinkRel from "../components/LinkRel";
import Link from "next/link";
import SocialTree from "../components/SocialTree";
import ShareButton from "../components/ShareButton";

const Handle = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [userFound, setUserFound] = useState(false);

  const [social, setSocial] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    github: "",
  });
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  useEffect(() => {
    if (router.query?.handle) {
      fetch(`${backendURL}/get/${router.query.handle}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "error") return toast.error(data.error);
          if (data.status === "success") {
            setData(data.userData);
            setSocial(data.socials);
            setUserFound(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.query]);

  if (!userFound) {
    return (
      <div className="flex justify-center items-center h-screen border rounded-lg shadow-xl border-gray-400">
        <div className="not-found px-3 bg-white p-8 rounded-lg shadow-2xl max-w-md ">
          <h1 className="font-bold text-lg">User Not found 🙁</h1>
          <p>If you're interested</p>
          Create your own
          <Link
            className="bg-indigo-600 px-2 ml-2 text-white hover:bg-indigo-400 transition-all duration-500"
            href="/apply"
          >
            {" "}
            LinkRel
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ShareButton />
      <LinkRel data={data} />
      <SocialTree social={social} />
    </div>
  );
};

export default Handle;
