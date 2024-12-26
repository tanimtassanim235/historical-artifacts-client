import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
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

                    {
                        user
                            ?
                            (
                                <>
                                    <NavLink to="/my-artifacts" className={({ isActive }) => `font-bold mx-4 text-lg ${isActive ? 'text-green-400/70' : 'hover:text-red-400'}`}>My Artifacts</NavLink>
                                    <div className='size-14' title={user?.displayName}>
                                        <img className="w-14 rounded-3xl" src={`${user?.photoURL}`} alt="" />
                                    </div>
                                    <button onClick={logOut} className="btn bg-gradient-to-r from-[#283c86] to-[#45a247]  text-white ml-2 rounded-xl">Log Out</button>
                                </>
                            )
                            :
                            (
                                <>
                                    <Link to="/login" className='btn mr-5 bg-gradient-to-r from-[#283c86] to-[#45a247]  text-white'>Log In</Link>
                                    <Link to="/register" className='btn bg-gradient-to-r from-[#f2f2] to-[#45a203]  text-white'>Register</Link>
                                </>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;