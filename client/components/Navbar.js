import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [token, setToken] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    const loadToken = () => {
      if (typeof window !== "undefined") {
        const storedToken = localStorage.getItem("LinkTreeToken");
        setToken(storedToken);
      }
    };

    loadToken();
    const handleStorageChange = () => {
      loadToken();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("LinkTreeToken");
    if (!localStorage.getItem("LinkTreeToken")) {
      window.location.href = "/login";
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-white border shadow-xl fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <img
            src="/images/linkrel.png"
            className="h-12 mr-3"
            alt="Company Logo"
          />
        </Link>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            mobileMenuOpen ? "" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link href="/" className="block py-2 text-gray-600">
                Home
              </Link>
            </li>
            <li>
              {token === null ? (
                <Link href="/apply" className="block py-2 text-gray-600">
                  Register
                </Link>
              ) : (
                <Link href="/edit/profile" className="block py-2 text-gray-600">
                  Profile
                </Link>
              )}
            </li>
            <li>
              {token === null ? (
                <Link href="/login" className="block py-2 text-gray-600">
                  Login
                </Link>
              ) : (
                <a
                  onClick={handleLogout}
                  className="block py-2 text-gray-600 cursor-pointer"
                >
                  Logout
                </a>
              )}
            </li>
            <li>
              <Link href="/dashboard" className="block py-2 text-gray-600">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
