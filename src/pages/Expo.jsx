import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useLoaderData } from "react-router-dom";
import { getStoredExpoApp } from "../Storage/LocalStorage";
import { useState } from "react";
const Expo = () => {

    const [appliedExpo, setAppliedExpo] = useState([])

    const expos = useLoaderData();
    console.log(expos)

    useEffect(()=> {
        const storedExpoId = getStoredExpoApp();
        if(expos.length > 0){
            const ExpoApplied = [];
            for(const id of storedExpoId){
                const Event = expos.find(expo => expo.id === id)
                if(Event){
                    ExpoApplied.push(Event)
                }
            }
            setAppliedExpo(ExpoApplied)
        }
    }, [expos])
    
    
    

    return (
        <div>
            <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                <div className="flex">
                    <div className="max-w-7xl mx-auto flex flex-row">
                        <div className="mt-10">
                            <h2 className="text-7xl text-white font-poppins font-black" data-aos="fade-right">Applied Expo</h2>
                            <br />
                            <p className="text-2xl text-white">Ai, Data and leadership: Finding business value from emerging tech innovations</p>
                            <p className="text-xl bg-white text-pink-800 p-2 mt-2 rounded-sm">Los Angels | Boston | New York | Dallas | Chicago | Toronto </p>
                        </div>
                        <div className="mt-10">
                            <img src="https://i.gifer.com/1VB6.gif" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
            <h2 className="text-2xl">You Applied Expo's : {appliedExpo.length} </h2>
            </div>
        </div>
    );
};

export default Expo;

