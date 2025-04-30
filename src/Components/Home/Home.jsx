import HeaderData from "../../data/Header/HeaderData";
import About from "../About/About";
import Work from "../Work/Work";
import programmLanguages from "../../data/Home/HomeData";
import HomeContact from "../HomeContact/HomeContact";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <>
            <section id="home" className="pt-24">
                <div className="dark:bg-[#f7f3f3] bg-[#111827] flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="text-center w-full max-w-7xl py-12 sm:py-16">
                        {/* Title */}
                        <div className="max-w-3xl mx-auto mb-6">
                            <h1 className="dark:text-[#111827] text-[#F7F3F3] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                {HeaderData.MyFISH}
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <div className="max-w-4xl mx-auto mb-8 px-2">
                            <p className="dark:text-[#898989] text-[#abadb2] font-sans text-lg sm:text-xl md:text-2xl font-bold text-justify">
                                {HeaderData.subtitle}
                            </p>
                        </div>

                        {/* Programming languages */}
                        <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-4">
                            {programmLanguages?.map((el) => (
                                <li key={el?.name}>
                                    <div className="dark:bg-[#E3E8ED] bg-[#172135] flex items-center space-x-2 rounded-md px-3 py-2">
                                        <i>{el?.image}</i>
                                        <p className="dark:text-[#111827] text-[#f7f3f3] text-sm sm:text-base font-normal font-sans">
                                            {el?.name}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <About />
            <Work />
            <HomeContact />
        </>
    );
};

export default Home;
