import { useState } from "react";
import experienceData from "../../data/About/About";
import { FaGoogle } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { SiOculus } from "react-icons/si";

const About = () => {
    const [itemID, setItemID] = useState(1);



    return (
        <section id="about" className="pt-24">
            <div className="container">
                <div>
                    <h2 className="dark:text-[#111827] w-full mt-0 mx-auto mb-[42px] text-[#F7F3F3] text-5xl font-bold font-code">My Experience</h2>
                    <div className="dark:text-[#898989] font-sans w-full font-bold text-[#abadb2] text-[24px] mb-8 gap-[20px] justify-between flex flex-wrap items-strech">
                        <ul className="w-[45%] cursor-pointer">
                            <li onClick={() => setItemID(1)}>
                                <div className={`rounded-[5px] px-4 py-4 ${itemID === 1 ? 'dark:bg-[#94a3b8] bg-[#172135]' : 'dark:bg-[#F7F3F3] bg-[#111827]'}`}>
                                    <i><FaGoogle className="dark:text-[#111827]" /></i>
                                    <h3 className="dark:text-[#172135] text-normal text-[18px] text-[#94a3b8] m-0">Google</h3>
                                    <p className="dark:text-[#17213566] text-[#F7F3F3] text-[12px] font-normal m-0">UI Engineer</p>
                                </div>
                            </li>

                            <li onClick={() => setItemID(2)}>
                                <div className={`rounded-[5px] px-4 py-4 ${itemID === 2 ? 'dark:bg-[#94a3b8] bg-[#172135]' : 'dark:bg-[#F7F3F3] bg-[#111827]'}`}>
                                    <i><SiHashnode className="dark:text-[#111827]" /></i>
                                    <h3 className="dark:text-[#172135] text-normal text-[18px] text-[#94a3b8] m-0">Hashnode</h3>
                                    <p className="dark:text-[#17213566] text-[#F7F3F3] text-[12px] font-normal m-0">Frontend Developer</p>
                                </div>
                            </li>
                            <li onClick={() => setItemID(3)}>
                                <div className={`rounded-[5px] px-4 py-4 ${itemID === 3 ? 'dark:bg-[#94a3b8] bg-[#172135]' : 'dark:bg-[#F7F3F3] bg-[#111827]'}`}>
                                    <i><SiOculus className="dark:text-[#111827]" /></i>
                                    <h3 className="dark:text-[#172135] text-normal text-[18px] text-[#94a3b8] m-0">Oculus</h3>
                                    <p className="dark:text-[#17213566] text-[#F7F3F3] text-[12px] font-normal m-0">Software Engineer</p>
                                </div>
                            </li>
                            <li></li>
                        </ul>
                        <div className="w-[45%]">
                            {experienceData?.map(el => (
                                itemID === el?.id ? (
                                    <>
                                        <div className="flex flex-col mb-4">
                                            <span className="text-[18px] font-normal dark:text-[#111827] text-[#f7f3f3]">{el.title}</span>
                                            <span className="text-[18px] font-normal dark:text-[#111827] text-[#f7f3f3]">
                                                {el.from} - {el.to}
                                            </span>
                                            {el.items?.map(item => { return <span className="items-start text-[16px] font-normal dark:text-[#111827] text-[#f7f3f3] gap-[10px] m-0 mb-3"> <span className="text-blue-500">{item.sign}</span> {item.description}</span> })}
                                        </div>
                                    </>
                                ) : ''
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default About;