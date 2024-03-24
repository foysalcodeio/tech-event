import { Link } from "react-router-dom";

const Service = ({ service }) => {
    //  console.log(service)
    const { id, name, short_description, image, date, location, ticket_price } = service;
    return (
        <div ata-aos-anchor-placement="bottom-bottom" className="card mt-5 shadow-xl bg-gradient-to-r from-blue-900 to-violet-800 hover:bg-orange-500 ">
        <figure><img className='h-52 w-full' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-white text-3xl">{name}</h2>
          <p>{short_description}</p>
          <div>
            <p>Date : {date}</p>
            <p>Location: {location}</p>
          </div>
          <h1 className='text-4xl bg-gradient-to-r from-orange-600 to-orange-500 p-2 rounded-md text-white font-semibold'>Price : {ticket_price}</h1>
          <div className="card-actions justify-center">
           <Link to={`/service/${id}`}>
                <button className="btn btn-primary text-gray-50 hover:btn-warning">I'm Interested</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default Service;


