import React, { useState } from 'react';
import workData from '../../data/Work/Work';

const Work = () => {
    const [itemID, setItemID] = useState(1);

    return (
        <section id="work" className="pt-24">
            <div className="container mx-auto px-4">
                <h2 className="dark:text-[#111827] text-[#F7F3F3] text-5xl font-bold text-center mb-12">
                    My Latest Work
                </h2>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {workData?.map((el) => (
                        <li
                            key={el?.id}
                            onClick={() => setItemID(el.id)}
                            className={`rounded-[8px] cursor-pointer transition-transform duration-200 hover:scale-105 hover:ring-2 ring-blue-500 ${itemID === el.id ? '' : ''
                                }`}
                        >
                            <div className="h-full bg-[#172135] dark:bg-[#e3e8ed] p-6 rounded-[8px] flex flex-col justify-between">
                                <h3 className="font-code font-bold text-3xl text-white dark:text-[#111827] mb-4">
                                    {el.title}
                                </h3>

                                <img
                                    src={el.image}
                                    alt={el.title}
                                    className="rounded-md w-full object-cover mb-4"
                                />

                                <div className="flex flex-wrap justify-between items-center">
                                    <ul className="flex flex-wrap gap-2">
                                        {el.programmLanguages?.map((lang, i) => (
                                            <li key={i}>
                                                <span className="text-sm font-medium text-[#f7f3f3] dark:text-[#111827]">
                                                    {lang?.name}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex gap-3 text-[24px]">
                                        <a href={el.link1 || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                                            {el.icon1}
                                        </a>
                                        <a href={el.link2 || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                                            {el.icon2}
                                        </a>
                                    </div>
                                </div>

                                <p className="text-sm text-[#f7f3f3] dark:text-[#111827] mt-4">
                                    {el.subtitle}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Work;