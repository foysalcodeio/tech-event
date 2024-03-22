import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
    return (
        <div className="font-poppins bg-white">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;