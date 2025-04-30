import axios from 'axios';
import React, { useState } from 'react'

const Contact = () => {
    const [loading,setloading] = useState(false);
    const SendMessage = event => {
        setloading(true);
        event.preventDefault();
        const token = "7793631552:AAGAd9KyMBall-VRt_YGfwzK_1jQbS7wgKE";
        const chat_id = -1002682229756;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const email = document.getElementById("email").value;
        const name = document.getElementById("name").value;
        const image = document.getElementById("image").value;
        const theme = document.getElementById("theme").value;
        const messageAboutTheme = document.getElementById("message").value
        const messageContent = `Email: ${email} \nName: ${name} \nTheme: ${theme} \nMessage: ${messageAboutTheme} \nImage: ${image}`
        axios({
            url: url,
            method: 'POST',
            data: {
                "chat_id": chat_id,
                "text": messageContent,
            }
        }).then(() => {
            document.getElementById("messageForm").reset();
            alert("Muvaffaqiyatli yuborildi!")
        }).catch((err) => {
            alert("Yuborishda xatolik bor!")
            console.error("Xatolik bor!", err);
        }).finally(() => {
            setloading(false);
        })
    }
    return (
        <section id='contact' className='pt-24'>
            <div className='container'>
                <div className="dark:bg-[#f7f3f3] bg-[#111827] flex items-center justify-center">
                    <div className="h-full rounded-[12px] px-62 py-10 text-center">
                        <h1 className="dark:text-[#111827] w-full mt-0 mx-auto mb-[24px] max-w-[700px] text-[#F7F3F3] text-[60px] font-bold">Ask me a
                            <span className='text-blue-500'> question</span>
                        </h1>
                        <form id='messageForm' onSubmit={SendMessage}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <div className="space-y-4">

                                    <input
                                        id='email'
                                        type="email"
                                        placeholder="Email"
                                        className="w-full p-2 rounded border dark:bg-[#e3e8ed] bg-[#172135] dark:text-black text-white"
                                    />
                                    <input
                                        id='name'
                                        type="text"
                                        placeholder="Ism"
                                        className="w-full p-2 rounded border dark:bg-[#e3e8ed] bg-[#172135] dark:text-black text-white"
                                    />
                                    <input
                                        id='theme'
                                        type="text"
                                        placeholder="Mavzu"
                                        className="w-full p-2 rounded border dark:bg-[#e3e8ed] bg-[#172135] dark:text-black text-white"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        id='message'
                                        placeholder="Xabaringiz"
                                        rows="6"
                                        className="w-full h-full px-2 py-0.5 rounded border dark:bg-[#e3e8ed] bg-[#172135] dark:text-black text-white resize-none"
                                    ></textarea>
                                </div>
                            </div>
                                <div className='flex justify-center items-center mt-4'>
                                    <button type='submit' loading={loading} className=' border border-white py-1 w-[200px] rounded-md text-white transition-all transform duration-200 bg-blue-500 hover:scale-105 '>
                                        {loading ? "Yuborilmoqda..." : "Yuborish"}
                                    </button>
                                </div>
                        </form>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contact