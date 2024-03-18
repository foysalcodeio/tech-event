import { Link, NavLink } from "react-router-dom";
import userLogo from "./../assets/user.png"

const Navbar = () => {
    const NavLinks = <>
        <li><NavLink className="no-underline" to="/">Home</NavLink></li>
        <li><NavLink className="no-underline" to="/visit">Visit</NavLink></li>
        <li><NavLink className="no-underline" to="/project">Project</NavLink></li>
        <li><NavLink className="no-underline" to="/expo">Expo</NavLink></li>
    </>

    const NavLinks2 = <>
        <li><NavLink className="no-underline" to="/login">Login</NavLink></li>
    </>

    const subMenus = <>
        <li><NavLink className="no-underline" to="/expo1">Day 1</NavLink></li>
        <li><NavLink className="no-underline" to="/expo2">Day 2</NavLink></li>
        <li><NavLink className="no-underline" to="/expo3">Day 3</NavLink></li>
    </>
    return (
        <div className="bg-black">
            <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                {subMenus}
                            </ul>
                            <Link className="btn ml-20">
                                <button className="bg-white p-2 border rounded-md text-orange-600  font-semibold">Buy Ticket</button>
                            </Link>
                        </li>
                        {NavLinks2}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">TernTECH</a>
            </div>



            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                    <li>
                        <details>
                            <summary>Event List</summary>
                            <ul className="p-4">
                                {subMenus}
                            </ul>
                        </details>
                    </li>

                    <Link className="btn ml-20">
                        <button className="bg-white p-2 border rounded-md text-orange-600  font-semibold">Buy Ticket</button>
                    </Link>
                </ul>
            </div>
            <div className="navbar-end">
                
                {NavLinks2}

                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={userLogo} />
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Navbar;