import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    console.log(user?.photo);
    return (
        <div>
            <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
                <div className='flex-1'>
                    <Link to='/' className='flex gap-2 items-center'>
                        <img className='w-auto h-7' src={logo} alt='' />
                        <span className='font-bold'>Antike</span>
                    </Link>
                </div>
                <div className='flex-none'>
                    <ul className='menu menu-horizontal px-1'>
                        <li>
                            <Link to='/' className="ml-6">Home</Link>
                        </li>
                        <li>
                            <Link to='/all-artifacts'>All Artifacts</Link>
                        </li>
                        <li>
                            <Link to='/add-artifacts'>Add Artifacts</Link>
                        </li>

                        {!user && (
                            <li>
                                <Link to='/login'>Login</Link>
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
                                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                            >
                                <li className='mt-2'>
                                    <button
                                        onClick={logOut}
                                        className='bg-gray-200 block text-center'
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
                                    className='btn btn-circle'
                                >
                                    <div className='w-10 rounded-full lg:rounded-none '>
                                        <p>My Profile</p>
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                                >
                                    <li>
                                        <Link to='/my-artifacts' className='justify-between'>
                                            My Artifacts
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/liked-artifacts'>Liked Artifacts</Link>
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