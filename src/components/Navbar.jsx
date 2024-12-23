import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow">
                            <NavLink to="/" className={({ isActive }) => `font-bold text-lg ${isActive ? 'text-green-400/70' : 'hover:text-red-400'}`}>Home</NavLink>
                            <NavLink to="/all-artifacts" className={({ isActive }) => `font-bold text-lg ${isActive ? 'text-green-400/70' : 'hover:text-red-400'}`}>All Artifacts</NavLink>
                            <NavLink to="/add-artifacts" className={({ isActive }) => `font-bold text-lg ${isActive ? 'text-green-400/70' : 'hover:text-red-400'}`}>Add Artifacts</NavLink>
                        </ul>
                    </div>
                    <Link className="flex items-center justify-center gap-1">
                        <div>
                            <img className="w-14" src={logo} alt="" />
                        </div>
                        <h3 className="font-semibold text-2xl">Antikei</h3>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-9">
                        <NavLink to="/" className={({ isActive }) => `font-bold text-lg ${isActive ? 'text-green-400/70' : 'hover:text-red-400'}`}>Home</NavLink>
                        <NavLink to="/all-artifacts" className={({ isActive }) => `font-bold text-lg ${isActive ? 'text-green-400/70' : 'hover:text-red-400'}`}>All Artifacts</NavLink>
                        <NavLink to="/add-artifacts" className={({ isActive }) => `font-bold  text-lg ${isActive ? 'text-green-400/70' : 'hover:text-red-400'}`}>Add Artifacts</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;