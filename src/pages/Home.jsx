import { useLoaderData } from "react-router-dom";
import AutoSlider from "../Components/AutoSlider";
import Header from "./Header";
import Service from "./Service";
import Aos from 'aos';
import { useEffect } from "react";

const Home = () => {
    const serviceInfo = useLoaderData();
    console.log(serviceInfo)

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <div className="bg-black">
                <AutoSlider></AutoSlider>
            </div>
            <Header></Header>
            <div className=" w-full h-fit ">
                <div className="mx-auto my-auto max-w-7xl">
                    <div className="h-16 flex items-center">
                        <h2 className="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-900"> Choose your Expo : </h2>
                    </div>
                    <div className="flex h-max mb-10">
                        <div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-3" data-aos="fade-up">
                            {
                                serviceInfo.map(services => <Service
                                    key={services.id}
                                    service={services}
                                ></Service>)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;