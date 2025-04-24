import { IoLogoJavascript } from "react-icons/io5";
import { PiFileCSharpLight, PiFileCss, PiFileHtmlDuotone } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";

const programmLanguages = [
    {
        name: "C#",
        image: <PiFileCSharpLight className="dark:text-[#111827] text-white" />
    },
    {
        name: "HTML",
        image: <PiFileHtmlDuotone className="dark:text-[#111827] text-white" />
    },
    {
        name: "CSS",
        image: <PiFileCss className="dark:text-[#111827] text-white" />
    },
    {
        name: "TailWindCSS",
        image: <RiTailwindCssFill className="dark:text-[#111827] text-white" />
    },
    {
        name: "JavaScript",
        image: <IoLogoJavascript className="dark:text-[#111827] text-white" />
    }
]

export default programmLanguages