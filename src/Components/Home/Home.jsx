import HeaderData from "../../data/Header/HeaderData";
import About from "../About/About";
import Work from "../Work/Work";
import programmLanguages from "../../data/Home/HomeData";
import HomeContact from "../HomeContact/HomeContact";
import Contact from "../Contact/Contact";
// import useDarkMode from "../DarkMode/DarkMode";

const Home = () => {
    // const [darkMode] = useDarkMode();
    // console.log(HeaderData.forEach((item) => item.MyFISH));

    // useEffect(() => {
    //   HeaderData?.map(el => {
    //     console.log(el.MyFISH)
    //   })
    // }, [])


    return (
        <>
            <section id="home" className="pt-24">
                <div className="dark:bg-[#f7f3f3] bg-[#111827] flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="dark:text-[#111827] w-full mt-0 mx-auto mb-[24px] max-w-[700px] text-[#F7F3F3] text-[60px] font-bold">{HeaderData.MyFISH}</h1>
                        <p className="dark:text-[#898989] font-sans text-justify max-w-[1020px] font-bold text-[#abadb2] text-[24px] mb-8">{HeaderData.subtitle}</p>
                        <ul className="flex justify-center items-center gap-6">
                            {programmLanguages?.map(el => {
                                return (
                                    <li key={el?.name}>
                                        <div className="dark:bg-[#E3E8ED] flex items-center bg-[#172135] rounded-[3px] space-x-2 px-2 py-1">
                                            <i>{el?.image}</i>
                                            <p className="dark:text-[#111827] font-sans font-normal leading-[1.537] m-0 text-[#f7f3f3] text-base text-400">{el?.name}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>

            <About />
            <Work />
            <HomeContact />
            <Contact />

        </>

    )
}

export default Home;