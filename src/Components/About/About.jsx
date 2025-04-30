import { useState } from "react";
import experienceData from "../../data/About/About";
import { FaGoogle } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { SiOculus } from "react-icons/si";

const About = () => {
    const [itemID, setItemID] = useState(1);



    return (
        <section id="about" className="pt-24">
            <div className="container mx-auto px-4">
                <h2 className="dark:text-[#111827] w-full mt-0 mx-auto mb-[42px] text-[#F7F3F3] text-5xl font-bold font-code">My Experience</h2>
                <div className="md:flex-row dark:text-[#898989] font-sans w-full font-bold text-[#abadb2] text-[24px] mb-8 gap-[20px] justify-between flex flex-wrap items-strech">
                    <ul className="md:w-1/2 w-auto flex sm:flex-col flex-row cursor-pointer">
                        <li onClick={() => setItemID(1)}>
                            <div className={`rounded-[5px] flex items-center gap-4 px-4 py-4 ${itemID === 1 ? 'dark:bg-[#94a3b8] bg-[#172135]' : 'dark:bg-[#F7F3F3] bg-[#111827]'}`}>
                                <i><FaGoogle className="dark:text-[#111827] text-4xl" /></i>
                                <div>
                                    <h3 className="dark:text-[#172135] text-normal text-[18px] text-[#94a3b8] m-0 hidden md:block">Google</h3>
                                    <p className="dark:text-[#17213566] text-[#F7F3F3] text-[12px] font-normal m-0 hidden md:block">UI Engineer</p>
                                </div>
                            </div>
                        </li>

                        <li onClick={() => setItemID(2)}>
                            <div className={`rounded-[5px] flex items-center gap-4 px-4 py-4 ${itemID === 2 ? 'dark:bg-[#94a3b8] bg-[#172135]' : 'dark:bg-[#F7F3F3] bg-[#111827]'}`}>
                                <i><SiHashnode className="dark:text-[#111827] text-4xl" /></i>
                                <div>
                                    <h3 className="dark:text-[#172135] text-normal text-[18px] text-[#94a3b8] m-0 hidden md:block">Hashnode</h3>
                                    <p className="dark:text-[#17213566] text-[#F7F3F3] text-[12px] font-normal m-0 hidden md:block">Frontend Developer</p>
                                </div>
                            </div>
                        </li>
                        <li onClick={() => setItemID(3)}>
                            <div className={`rounded-[5px] flex items-center gap-4 px-4 py-4 ${itemID === 3 ? 'dark:bg-[#94a3b8] bg-[#172135]' : 'dark:bg-[#F7F3F3] bg-[#111827]'}`}>
                                <i><SiOculus className="dark:text-[#111827] text-4xl" /></i>
                                <div>
                                    <h3 className="dark:text-[#172135] text-normal text-[18px] text-[#94a3b8] m-0 hidden md:block">Oculus</h3>
                                    <p className="dark:text-[#17213566] text-[#F7F3F3] text-[12px] font-normal m-0 hidden md:block">Software Engineer</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="w-full sm:w-[45%] md:pl-8">
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
        </section >
    )
}

export default About;