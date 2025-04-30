import React, { useState } from "react";
import logo from "../../assets/logo.png";
import llogo from "../../assets/llogo.png";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import useDarkMode from "../../Components/DarkMode/DarkMode";
import { Link } from "react-router-dom";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useDarkMode();

    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <header className="dark:bg-[#F7F3F3] bg-[#111827] fixed top-0 left-0 right-0 z-50">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center py-4 px-6">
                <Link to="/" className="flex-shrink-0">
                    <img src={darkMode ? llogo : logo} alt="Logo" className="h-10" />
                </Link>

                <nav className="flex items-center space-x-4">
                    <div className="sm:hidden block">
                        <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />
                    </div>

                    <ul className="hidden sm:flex space-x-6">
                        <li><a href="#home" className="dark:text-[#111827] text-[#f7f3f3]">Home</a></li>
                        <li><a href="#about" className="dark:text-[#111827] text-[#f7f3f3]">About</a></li>
                        <li><a href="#work" className="dark:text-[#111827] text-[#f7f3f3]">Work</a></li>
                        <li><Link to="/contact" className="dark:text-[#111827] text-[#f7f3f3]">Contact</Link></li>
                    </ul>

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
                    </button>
                </nav>
            </div>
            <div className="dark:bg-[#F7F3F3] bg-[#111827]">
                <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
                    <ul className="space-y-4">
                        <li><a href="#home" onClick={onClose} className="dark:text-[#111827] text-[#f7f3f3]">Home</a></li>
                        <li><a href="#about" onClick={onClose} className="dark:text-[#111827] text-[#f7f3f3]">About</a></li>
                        <li><a href="#work" onClick={onClose} className="dark:text-[#111827] text-[#f7f3f3]">Work</a></li>
                        <li><Link to="/contact" onClick={onClose} className="dark:text-[#111827] text-[#f7f3f3]">Contact</Link></li>
                    </ul>
                </Drawer>
            </div>
        </header>
    );
};

export default Header;