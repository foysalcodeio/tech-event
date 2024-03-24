import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Details from "../Components/Details";
import { saveExpoApp } from "../Storage/LocalStorage";


const Visit = () => {

    const { id } = useParams();
    const interestInfo = useLoaderData();
    const idInt = parseInt(id);
    const infoData = interestInfo.find(info => info.id === idInt);
    const { name, image, ticket_price } = infoData;

    const handleApplyExpo = () => {
        saveExpoApp(idInt);
        toast('You have applied successfully');
    }

    return (
        <div className="">
            <Details />

            <div className="max-w-6xl mx-auto py-8 px-5 flex justify-between lg:px-8">
                <div className="w-full flex-1 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
                    <div className="pb-7 flex items-center border-b border-gray-300">
                        <img src={image}  alt="" className="rounded-3xl w-20 h-20" />
                        <div className="ml-5">
                            <span className="block text-2xl font-semibold">{name}</span>
                            <span><span className="font-medium text-gray-500 text-xl align-top"></span><span className="text-3xl font-bold">{ticket_price}</span></span><span className="text-gray-500 font-medium">/ user</span>
                        </div>
                    </div>
                    <ul className="mb-7 font-medium text-gray-500">
                        <li className="flex text-lg mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="check" />
                            <span className="ml-3">All features in <span className="text-black">Startup</span></span>
                        </li>
                        <li className="flex text-lg mb-2">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="check" />
                            <span className="ml-3">Growth <span className="text-black">oriented</span></span>
                        </li>
                        <li className="flex text-lg">
                            <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="check" />
                            <span className="ml-3"><span className="text-black">Unlimited</span> cloud storage</span>
                        </li>
                    </ul>
                    <button onClick={handleApplyExpo} className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-3 text-center text-white text-xl">
                        You are In. Now Ready to go :)
                        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" alt="arrow" className="ml-2" />
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Visit;
