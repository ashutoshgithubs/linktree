import Link from "next/link";
import MyHead from "../components/MyHead";
import {
  ArrowRight,
  Link2,
  Instagram,
  Twitter,
  Github,
  Linkedin,
  Youtube,
} from "lucide-react";
export default function Home() {
  return (
    <>
      <MyHead
        title="LinkRel - Your Social Hub"
        description="Welcome to LinkRel! Organize all your social links in one beautiful page."
        image="https://i.ibb.co/rKYQgYLD/image-removebg-preview-1.png"
        url="https://LinkRel-lovat-mu.vercel.app/apply"
      />

      <main className="w-full mt-6 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 md:p-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Floating social icons for decoration */}
        <div className="hidden md:block absolute top-1/4 left-10 text-indigo-300 opacity-50 animate-float">
          <Instagram size={32} />
        </div>
        <div className="hidden md:block absolute top-1/3 right-16 text-purple-300 opacity-50 animate-float animation-delay-1000">
          <Twitter size={32} />
        </div>
        <div className="hidden md:block absolute bottom-1/4 left-16 text-pink-300 opacity-50 animate-float animation-delay-2000">
          <Github size={32} />
        </div>
        <div className="hidden md:block absolute top-2/3 right-24 text-indigo-300 opacity-50 animate-float animation-delay-3000">
          <Linkedin size={32} />
        </div>
        <div className="hidden md:block absolute bottom-1/3 left-24 text-purple-300 opacity-50 animate-float animation-delay-4000">
          <Youtube size={32} />
        </div>

        <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
          <div className="relative z-10 text-center bg-white/80 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl max-w-md md:max-w-lg border border-white/50">
            {/* Logo */}
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-2xl">
                <Link2 className="text-white" size={28} />
              </div>
              <h3 className="ml-2 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                LinkRel
              </h3>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              One Link for{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                All Your Content
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Create your digital hub in seconds. Connect your audience to
              everything you are, in one beautiful link.
            </p>
            <Link
              href="/apply"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 p-px font-medium text-indigo-50 transition duration-300 ease-in-out hover:text-white"
            >
              <span className="relative flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3.5 transition-all duration-300 ease-in-out group-hover:bg-opacity-0">
                Create Your LinkRel
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
