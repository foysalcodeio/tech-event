import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Details = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return ( 
        <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="max-w-7xl mx-auto flex">
                <div > 
                <h2 className="text-9xl text-white font-poppins font-black" data-aos="fade-right">Tech In Future</h2>
                <p className="text-2xl text-white">Ai, Data and leadership: Finding business value from emerging tech innovations</p>
                <p className="text-xl bg-white text-pink-800 p-2 mt-2 rounded-sm">Los Angels | Boston | New York | Dallas | Chicago | Totonto </p>
                <button className="p-4 bg-white rounded-xl mt-5 mb-5 text-black font-semibold">Become a Sponsor</button>
                </div>
            </div> 
            <div>
                    animated image
            </div>

            <div className="bg-white h-screen">
                <div >
                    
                </div>

            </div>

                   
        </div>
    );
};

export default Details;