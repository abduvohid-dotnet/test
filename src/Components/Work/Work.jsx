import React, { useState } from 'react'
import workData from '../../data/Work/Work'

const Work = () => {
    const [itemID, setItemID] = useState(1);
    return (
        <section id='work' className='pt-24'>
            <div className='container'>
                <div>
                    <h2 className="dark:text-[#111827] w-full mt-0 mx-auto mb-[42px] text-[#F7F3F3] text-5xl font-bold font-code">My Latest Work</h2>
                    <div className="dark:text-[#111827] text-[#F7F3F3] flex flex-row justify-between flex-wrap">
                        <ul className='grid grid-cols-2 gap-10 items-strech'>
                            {workData?.map(el => {
                                return (
                                    <li key={el?.name} onClick={() => setItemID(el.id)} className='h-full'>
                                        <div className={`h-full rounded-[5px] dark:bg-[#e3e8ed] bg-[#172135] px-4 py-4 ${itemID === 1}`}>
                                            <h2 className="font-code font-bold text-[36px]">{el.title}</h2>
                                            <img src={el.image} alt={el.title} />
                                            <div className='flex justify-between items-center flex-wrap pt-4'>
                                                <div className='flex flex-wrap gap-2 pt-2'>
                                                    {el.programmLanguages?.map(item => {
                                                        return (
                                                            <li key={item?.name}>
                                                                <span className="dark:text-[#111827] font-sans font-normal leading-[1.537] m-0 text-[#f7f3f3] text-base text-400">{item?.name}</span>
                                                            </li>
                                                        )
                                                    })}
                                                </div>
                                                <div className='dark:text-white flex justify-end pt-2 text-[30px]'>
                                                    <i className='pr-2'><a href="">{el.icon1}</a></i>
                                                    <i><a href="">{el.icon2}</a></i>
                                                </div>
                                            </div>
                                            <div className='pt-4'>
                                                <span>{el.subtitle}</span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
