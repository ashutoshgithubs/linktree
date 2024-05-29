import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

const NavBar = () => {
    const router = useRouter()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    useEffect(()=>{
        setMobileMenuOpen(false);
    }, [router.asPath])

    return (
    <>    
        {/* <nav className="bg-white border-gray-200 dark:bg-gray-200"> */}
        <nav className="bg-white border-gray-200 dark:bg-white border border shadow-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center">
                <img src="/images/caley.png" className="h-12 mr-3 " alt="Company Logo" />
                {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Template</span> */}
            </Link>
            <button onClick={toggleMobileMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className={`${mobileMenuOpen ? "" : "hidden"} w-full md:block md:w-auto focus:outline-none`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
                <li className='hover:text-gray-700 transition-transform transform hover:scale-110'>
                <Link href="/" className="block py-2 pl-3 pr-4 rounded md:bg-transparent  md:p-0  text-gray-600  " aria-current="page">Home</Link>
                </li>
                <li className='hover:text-gray-700 transition-transform transform hover:scale-110'>
                <Link href="/apply" className="block py-2 pl-3 pr-4 rounded md:bg-transparent  md:p-0  text-gray-600">Register</Link>
                </li>
                {/* <li>
                <Link href="/features" className="block py-2 pl-3 pr-4 rounded md:bg-transparent  md:p-0  text-gray-600 hover:text-gray-800">Features</Link>
                </li> */}
                {/* <li>
                <Link href="#" className="block py-2 pl-3 pr-4 rounded md:bg-transparent  md:p-0  text-gray-600 hover:text-gray-800">Custom</Link>
                </li> */}
                <li className='hover:text-gray-700 transition-transform transform hover:scale-110'>
                <Link href="/dashboard" className="block py-2 pl-3 pr-4 rounded md:bg-transparent  md:p-0  text-gray-600 ">Dashboard</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
    )
}

export default NavBar