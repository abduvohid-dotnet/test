import HeaderData from "../../data/Header/HeaderData";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileCSharpLight } from "react-icons/pi";
import { PiFileHtmlDuotone } from "react-icons/pi";
import { PiFileCss } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";

const Home = () => {

    // console.log(HeaderData.forEach((item) => item.MyFISH));

    // useEffect(() => {
    //   HeaderData?.map(el => {
    //     console.log(el.MyFISH)
    //   })
    // }, [])


    return (
        <section>
            <div className="bg-[#111827] h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="w-full mt-0 mx-auto mb-[24px] max-w-[700px] text-[#F7F3F3] text-[60px] font-bold mb-4">{HeaderData.MyFISH}</h1>
                    <p className="font-sans text-justify max-w-[1020px] font-bold text-[#abadb2] text-[24px] mb-8">{HeaderData.subtitle}</p>
                    <ul className="flex justify-center items-center gap-4">
                        <li>
                            <div className="flex items-center bg-[#172135] rounded-[3px] space-x-2">
                                <i><PiFileCSharpLight className="text-white" /></i>
                                <p className="font-sans font-normal leading-[1.537] m-0 text-[#f7f3f3] text-base text-400">C#</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center bg-[#172135] rounded-[3px] space-x-2">
                                <i><PiFileHtmlDuotone className="text-white" /></i>
                                <p className="font-sans font-normal leading-[1.537] m-0 text-[#f7f3f3] text-base text-400">HTML</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center bg-[#172135] rounded-[3px] space-x-2">
                                <i><PiFileCss className="text-white" /></i>
                                <p className="font-sans font-normal leading-[1.537] m-0 text-[#f7f3f3] text-base text-400">CSS</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center bg-[#172135] rounded-[3px] space-x-2">
                                <i><RiTailwindCssFill className="text-white" /></i>
                                <p className="font-sans font-normal leading-[1.537] m-0 text-[#f7f3f3] text-base text-400">TailWindCSS</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center bg-[#172135] rounded-[3px] space-x-2">
                                <i>{<IoLogoJavascript className="text-white" />}</i>
                                <p className="font-sans font-normal leading-[1.537] m-0 text-[#f7f3f3] text-base text-400">JavaScript</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Home;