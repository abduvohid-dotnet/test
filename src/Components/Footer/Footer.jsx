import React from "react";
import llogo from "../../assets/llogo.png";
import logo from "../../assets/logo.png"
import useDarkMode from '../../Components/DarkMode/DarkMode';
import footerData from "../../data/Footer/Footer";

const Footer = () => {
    const [darkMode] = useDarkMode();
    console.log(darkMode);
    
    return (
        <footer>
            <div className="container">
                <div className="max-w-7xl mx-auto flex justify-between items-center py-4 pt-24">
                    <a href="/" className="flex-shrink-0">
                        <img src={darkMode ? llogo : logo} alt="LogoV" />
                    </a>
                    <div className='dark:text-[#111827] text-white flex justify-end pt-2 text-[30px] gap-1'>
                        {footerData?.map(el => {
                            return (
                                <a href='' key={el.name}>
                                    {el.icon}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;