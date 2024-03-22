import { useEffect } from 'react';
import GroupImg from '../Components/GroupImg';
import image from '../assets/bg5.gif';
import Aos from 'aos';



const Header = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    
    return (
        <div className="w-full bg-gray-900 h-auto">
            <div className="max-w-7xl mx-auto flex flex-row">
                <div>
                    <h2 data-aos="fade-right" className="text-8xl text-white font-poppins font-black space-x-1 mt-10">Offshore <br /> Tech Staffing <br /> Done Right <b className="text-4xl">(finally)</b> </h2>
                    <p className="mt-10 mb-10 space-x-1 font-semibold">It's Helps fast growing tech companies <b>find, pay and retain</b> <br /> the Top 3% of development talent in Eastern Europe and Latin America </p>
                    <button data-aos="fade-right" className="btn  btn-accent space-y-1.5 mb-10">Book a Call </button>
                </div>
                <div>
                    <img data-aos="zoom-out-up" className='mx-auto mix-blend-lighten' src={image} alt="" />
                </div>
            </div>
            <div className='w-full bg-black'>
                <div className='max-w-7xl mx-auto flex'>
                    <p className='p-2 bg-blue-500 w-24 text-2xl text-center rounded-md text-white'>About Us</p>
                    <h2 className='text-5xl mt-5 text-center space-x-5 leading-normal text-white ml-10'>Using Trending Technologies <u className='text-violet-500'> We Develop The <br />
                        Best AI Based Application  With Out Best Experts  Will Help You And</u> Make Your Business Easier
                    </h2>
                </div>
                <div className='max-w-7xl mx-auto'>
                    <p className='text-3xl text-orange-400 mt-10 font-semibold mb-5'>Number of Participant</p>
                    <GroupImg />
                </div>
            </div>
            
        </div>
    );
};

export default Header;
