import React, { useState } from "react";
import styles from "../styles/apply.module.css";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiTwotoneMail } from "react-icons/ai";
 
const Apply = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  //console.log("BACKEND URL IN LOGIN", backendURL)
  const handleLogin = (e) => {
    e.preventDefault();
   // toast("You are Logged in");
    //backend here
    fetch(`${backendURL}/api/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast("You are Logged in");
          localStorage.setItem("LinkTreeToken", data.token);
          router.push("/dashboard");
        }
        if (data.status === "not found") {
          toast.error("User not found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section
        className={
          styles.background + " min-h-screen flex justify-center items-center"
        }
      >
        <div className="main">
          <div className="content bg-white border-2 px-4 py-8 rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold text-center">
            You're a Top Creator! 🚀
            </h1>
            <p className="text-center">Access your Dashboard</p>
            <p className="text-center py-5 font-bold text-gray-500">
            Start Building Your Hub Now ✨
            </p>
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-4 text-lg mt-5"
            >
              <span className="flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
              <AiTwotoneMail className="w-8 h-6 mr-2"/>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:outline-none"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-md border-2 px-3 py-2 rounded-md focus:outline-none"
                type="password"
                placeholder="Enter your password"
                required
              />
              <input
                className="bg-white text-indigo-600 py-2 font-semibold rounded-lg cursor-pointer border border-indigo-400"
                type="submit"
                value="Login"
              />
            </form>
          </div>
          <h4 className="text-center text-gray-500 font-semibold pt-3">
            New Here?{" "}
            <Link className="font-bold text-red-400" href="/register">
              Register
            </Link>
          </h4>
          <Footer />
        </div>
       
      </section>
      
    </>
  );
};
 
export default Apply;