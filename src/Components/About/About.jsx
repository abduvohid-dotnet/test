import { useState } from "react";
import experienceData from "../../data/About/About";

const About = () => {
    const [itemID, setItemID] = useState(1);



    return (
        <section id="about">
            <div className="container">
                <div className="h-screen">
                    <h2 className="dark:text-[#111827] w-full mt-0 mx-auto mb-[42px] max-w-[1200px] text-[#F7F3F3] text-5xl font-bold font-code ">My Experience</h2>
                    <div className="dark:text-[#898989] cursor-pointer font-sans px-[20px] py-[30px] max-w-[1200px] font-bold text-[#abadb2] text-[24px] mb-8 gap-[20px] justify-between flex flex-wrap items-strech">
                        <ul>
                            <li onClick={() => setItemID(1)}>
                                <img src="" alt="" />
                                <div>
                                    <h3>Google</h3>
                                    <p>UI Engineer</p>
                                </div>
                            </li>
                            <li onClick={() => setItemID(2)}>
                                <img src="" alt="" />
                                <div>
                                    <h3>Hashnode</h3>
                                    <p>Frontend Developer</p>
                                </div>
                            </li>
                            <li onClick={() => setItemID(3)}>
                                <img src="" alt="" />
                                <div>
                                    <h3>Oculus</h3>
                                    <p>Software Engineer</p>
                                </div>
                            </li>
                            <li></li>
                        </ul>
                        {experienceData?.map(el => (    
                            itemID === el?.id ? (
                                <>
                                    <div>
                                        {el.title}
                                        {el.items[0].description1}
                                    </div>
                                </>
                            ) : ''
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;