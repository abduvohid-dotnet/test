import React from 'react'
import homeContactData from '../../data/HomeContact/HomeContact'

const HomeContact = () => {
    return (
        <section id='homeContact' className='pt-24'>
            <div className='container'>
                <div className="dark:bg-[#f7f3f3] bg-[#111827] flex items-center justify-center">
                    <div className="h-full rounded-[12px] dark:bg-[#e3e8ed] bg-[#172135] px-62 py-10 text-center">
                        <h1 className="dark:text-[#111827] w-full mt-0 mx-auto mb-[24px] max-w-[700px] text-[#F7F3F3] text-[60px] font-bold">{homeContactData.title}</h1>
                        <a href='' className="font-sans text-justify max-w-[1020px] font-bold text-blue-500 text-[60px] mb-8">{homeContactData.link}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeContact
