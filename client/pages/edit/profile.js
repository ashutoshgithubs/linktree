import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserContext from "../../context/userContext";
import UserHeader from "../../components/UserHeader";
import { toast } from "react-toastify";

const profile = () => {
  const router = useRouter();
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { userData, setUserData } = useContext(UserContext);
  const [social, setSocial] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    github: "",
  });
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(
    "https://cdn-icons-png.flaticon.com/64/4140/4140048.png"
  );

  const handleSocial = (e) => {
    setSocial({
      ...social,
      [e.target.id]: e.target.value,
    });
  };
  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setBio(userData.bio);
      setAvatar(userData.avatar);
    }
  }, [userData]);
  const saveProfile = (e) => {
    e.preventDefault();
    fetch(`${backendURL}/save/profile`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkRelToken"),
        name: name,
        bio: bio,
        avatar: avatar,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error(data.error);
        toast.success("Profile saved successfully");
      });
  };
  const saveSocials = (e) => {
    e.preventDefault();
    fetch(`${backendURL}/save/socials`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkRelToken"),
        socials: social,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error(data.error);
        toast.success("Socials saved successfully");
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("LinkRelToken")) return router.push("/login");
    fetch(`${backendURL}/load/socials`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkRelToken"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error(data.error);
        setSocial(data.socials);
      });
  }, []);

  return (
    <>
      <div>
        <UserHeader />
        <main>
          <section>
            <div>
              <h4 className="font-bold text-center mb-5">Edit profile</h4>
              <div>
                <form
                  onSubmit={saveProfile}
                  className="flex flex-col justify-center items-center"
                >
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/name.svg" alt="" />
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Set your Name"
                      required
                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/bio.svg" alt="" />
                    <input
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter your bio"
                      required
                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/user.svg" alt="" />
                    <input
                      value={avatar}
                      onChange={(e) => setAvatar(e.target.value)}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Image link"
                      required
                    />
                    <img
                      className="w-10 rounded-full border-2 border-white shadow-md"
                      src={avatar}
                    />
                  </span>
                  <input
                    className="bg-green-500 w-32 px-4 py-2 rounded-md border-2 border-green-800 shadow-md cursor-pointer text-white"
                    type="submit"
                    value="save profile"
                  />
                </form>
              </div>
            </div>
            <div className="mt-14">
              <h4 className="font-bold text-center mb-5">Edit Socials</h4>
              <div>
                <form
                  onSubmit={saveSocials}
                  className="flex flex-col justify-center items-center"
                >
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/facebook.svg" alt="" />
                    <input
                      id="facebook"
                      value={social.facebook}
                      onChange={handleSocial}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Facebook ID"
                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/ig.svg" alt="" />
                    <input
                      id="instagram"
                      value={social.instagram}
                      onChange={handleSocial}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Instagram ID"
                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/twitter.svg" alt="" />
                    <input
                      id="twitter"
                      value={social.twitter}
                      onChange={handleSocial}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Twitter ID"
                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/linkedin.svg" alt="" />
                    <input
                      id="linkedin"
                      value={social.linkedin}
                      onChange={handleSocial}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Linkedin ID"
                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/github.svg" alt="" />
                    <input
                      id="github"
                      value={social.github}
                      onChange={handleSocial}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Github ID"
                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/youtube.svg" alt="" />
                    <input
                      id="youtube"
                      value={social.youtube}
                      onChange={handleSocial}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter YouTube ID "
                    />
                  </span>
                  <input
                    className="bg-green-500 w-32 px-4 py-2 rounded-md border-2 border-green-800 shadow-md cursor-pointer mb-10 text-white"
                    type="submit"
                    value="save Socials"
                  />
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default profile;
