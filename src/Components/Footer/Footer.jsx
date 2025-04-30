import React from "react";
import llogo from "../../assets/llogo.png";
import logo from "../../assets/logo.png";
import useDarkMode from "../../Components/DarkMode/DarkMode";
import footerData from "../../data/Footer/Footer";
import { Link } from "react-router-dom";

const Footer = () => {
    const [darkMode] = useDarkMode();

    return (
        <footer className="dark:bg-[#F7F3F3] bg-[#111827] py-10 mt-20">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img
                            src={darkMode ? llogo : logo}
                            alt="Logo"
                            className="h-10 object-contain"
                        />
                    </Link>

                    {/* Social Icons */}
                    <div className="flex gap-4 text-[26px] dark:text-[#111827] text-white">
                        {footerData?.map((el) => (
                            <a
                                key={el.name}
                                href={el.link || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors"
                            >
                                {el.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
