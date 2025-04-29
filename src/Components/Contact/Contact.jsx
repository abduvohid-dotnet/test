import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='pt-24'>
            <div className='container'>
                <div className="dark:bg-[#f7f3f3] bg-[#111827] flex items-center justify-center">
                    <div className="h-full rounded-[12px] dark:bg-[#e3e8ed] bg-[#172135] px-62 py-10 text-center">
                        <h1 className="dark:text-[#111827] w-full mt-0 mx-auto mb-[24px] max-w-[700px] text-[#F7F3F3] text-[60px] font-bold">Ask me a
                            <span className='text-blue-500'> question</span>
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-2 rounded border dark:bg-white bg-[#111827] dark:text-black text-white"
                                />
                                <input
                                    type="text"
                                    placeholder="Ism"
                                    className="w-full p-2 rounded border dark:bg-white bg-[#111827] dark:text-black text-white"
                                />
                                <input
                                    type="text"
                                    placeholder="Mavzu"
                                    className="w-full p-2 rounded border dark:bg-white bg-[#111827] dark:text-black text-white"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Xabaringiz"
                                    rows="6"
                                    className="w-full h-full px-2 py-0.5 rounded border dark:bg-white bg-[#111827] dark:text-black text-white resize-none"
                                ></textarea>
                            </div>
                            <div>
                                <button type='submit' className='btn btn-primary flex justify-center items-center'>
                                    Submit
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact