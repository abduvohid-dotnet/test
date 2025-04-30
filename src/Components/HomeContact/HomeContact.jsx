import React from 'react'
import homeContactData from '../../data/HomeContact/HomeContact'
import { Link } from 'react-router-dom'

const HomeContact = () => {
    return (
        <section id='homeContact' className='pt-24'>
            <div className='container'>
                <div className="dark:bg-[#f7f3f3] bg-[#111827] flex items-center justify-center">
                    <div className="h-full rounded-[12px] dark:bg-[#e3e8ed] bg-[#172135] max-w-[1020px] px-0 sm:px-62 py-10 text-center">
                        <h1 className="dark:text-[#111827] text-[#F7F3F3] text-[48px] font-bold mb-6">
                            {homeContactData.title}
                        </h1>
                        <Link to='/contact' className="text-blue-500 text-[24px] font-semibold">
                            {homeContactData.link}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeContact