import React from "react";
import logo from "../../assets/logo.png";
// import { IoSunnyOutline } from "react-icons/io5";
// import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import  useDarkMode  from '../../Components/DarkMode/DarkMode';


const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    return (
        <header className="bg-[#111827] fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
                <a href="/" className="flex-shrink-0">
                    <img src={logo} alt="LogoV" />
                </a>
                <nav className="flex-1 items-center">
                    <ul className="flex justify-end space-x-6">
                        <li><a href="#home" className="dark: block text-[#f7f3f3]">Home</a></li>
                        <li><a href="#about" className="block text-[#f7f3f3]">About</a></li>
                        <li><a href="#work" className="block text-[#f7f3f3]">Work</a></li>
                        <li><a href="#contact" className="text-[#f7f3f3]">Contact</a></li>
                        <li>
                            {/* <ThemeToggle className="text-[#f7f3f3] hover:text-[#f7f3f3]" /> */}
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                            >
                                {darkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Header