import { AiFillGithub } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png"

const workData = [
    {
        id: 1,
        title: "Portfolio personal",
        image: img1,
        icon1: <AiFillGithub className="dark:text-[#111827] text-white" />,
        icon2: <CiShare1 className="dark:text-[#111827] text-white" />,
        programmLanguages: [
            {
                name: "HTML"
            },
            {
                name: "Tailwind"
            },
            {
                name: "Typescript"
            },
            {
                name: "Next.js"
            }
        ],
        subtitle: "Digital agency is a landing page built with the latest version of Next.js using best practices."
    },
    {
        id: 2,
        title: "NFT Marketplace",
        image: img2,
        icon1: <AiFillGithub className="dark:text-[#111827] text-white" />,
        icon2: <CiShare1 className="dark:text-[#111827] text-white" />,
        programmLanguages: [
            {
                name: "HTML"
            },
            {
                name: "Tailwind"
            },
            {
                name: "Typescript"
            },
            {
                name: "Next.js"
            }
        ],
        subtitle: "An NFT marketplace built with Next.js and TypeScript."
    },
    {
        id: 3,
        title: "E-commerce Web App",
        image: img3,
        icon1: <AiFillGithub className="dark:text-[#111827] text-white" />,
        icon2: <CiShare1 className="dark:text-[#111827] text-white" />,
        programmLanguages: [
            {
                name: "React"
            },
            {
                name: "CSS"
            },
            {
                name: "Node.js"
            },
            {
                name: "MongoDB"
            }
        ],
        subtitle: "Full-stack e-commerce web app built using React, Node.js, and MongoDB."
    },
    {
        id: 4,
        title: "Blog Website",
        image: img4,
        icon1: <AiFillGithub className="dark:text-[#111827] text-white" />,
        icon2: <CiShare1 className="dark:text-[#111827] text-white" />,
        programmLanguages: [
            {
                name: "React"
            },
            {
                name: "CSS"
            },
            {
                name: "MongoDB"
            }
        ],
        subtitle: "A simple blog website built with React and MongoDB for the backend."
    }
]

export default workData;