import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    // console.log(user?.photo);
    return (
        <div>
            <div className='navbar bg-sky-300 shadow-sm container px-4 mx-auto'>
                <div className='flex-1'>
                    <Link to='/' className='flex gap-2 items-center'>
                        <img className='w-auto h-7' src={logo} alt='' />
                        <span className='font-bold'>Antike</span>
                    </Link>
                </div>
                <div className='flex-none'>
                    <ul className='menu menu-horizontal px-1'>
                        <li>
                            <NavLink to='/' className="ml-6">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/all-artifacts'>All Artifacts</NavLink>
                        </li>
                        <li>
                            <NavLink to='/add-artifacts'>Add Artifacts</NavLink>
                        </li>

                        {!user && (
                            <li>
                                <NavLink to='/login'>Login</NavLink>
                            </li>
                        )}
                    </ul>

                    {user && (
                        <div className='dropdown dropdown-end z-50'>
                            <div
                                tabIndex={0}
                                role='button'
                                className='btn btn-ghost btn-circle avatar'
                            >
                                <div title={user?.displayName} className='w-10 rounded-full'>
                                    <img
                                        referrerPolicy='no-referrer'
                                        alt='User Profile Photo'
                                        src={user?.photoURL}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-400 rounded-box w-52'
                            >
                                <li className='mt-2'>
                                    <button
                                        onClick={logOut}
                                        className='bg-red-400 block text-center'
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}

                    {
                        user && (
                            <div className='dropdown dropdown-end z-50'>
                                <div
                                    tabIndex={0}
                                    role='button'
                                    className='btn btn-circle bg-[#ACC8E5]'
                                >
                                    <div className='w-10 rounded-full lg:rounded-none '>
                                        <p>My Profile</p>
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-300 rounded-box w-52'
                                >
                                    <li>
                                        <NavLink to='/my-artifacts' className='justify-between'>
                                            My Artifacts
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/liked-artifacts'>Liked Artifacts</NavLink>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;