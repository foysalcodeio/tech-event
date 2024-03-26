import { MdOutlinePriceChange } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";


const ExpoList = ({ joinExpo }) => {
    console.log('join expo ', joinExpo)
    const {name, image, location, short_description, ticket_price, date} = joinExpo;
    return (
        <div className="flex items-center border-2 p-3 mt-10 mb-10 border-gray-200 rounded">
            <div className="ml-5">
                <figure><img className="w-96" src={image} alt="Shoes" /></figure>
            </div>

            <div className="mt-4 ml-20 flex-grow">
                <div className="card-body  bg-white rounded-lg">
                    <h2 className="card-title text-black">{name}</h2>
                    <p>{short_description}</p>
                    <div>
                        <button className="px-5 py-2 font-semibold bg-green-50  border rounded border-[#36a138] mr-4 text-[#36a138]">{date}</button>
                        {/* <button className="px-5 py-2 font-semibold bg-orange-50 border rounded border-[#e4913e] mr-4 text-[#e4913e]">{job_type}</button> */}
                    </div>
                    <div className="mt-4 flex mb-3 gap-5 text-gray-800">
                        <h2 className="flex"> < MdOutlineLocationOn className="text-xl mr-2" /> {location}</h2>
                        <h2 className="flex"> <MdOutlinePriceChange className="text-xl mr-2" />{ticket_price}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpoList;