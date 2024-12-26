import React, { useContext, useState } from 'react';
import loginlottie from '../assets/lottie/login.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa6';
const Login = () => {

    const { googleSignIn, signIn, setUser } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = e => {
        e.preventDefault()
        setErrorMessage('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then((res) => {
                const user = res.user;

                setUser(user)
                toast.success("Successfully Log in !", {
                    position: "top-center"
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
    }


    // Google login popup

    const handleWithGoogle = () => {
        googleSignIn()
            .then((res) => {
                const user = res.user;
                setUser(user)
                toast.success("Successfully Log in With Google !", {
                    position: "top-center"
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <Lottie animationData={loginlottie} loop={true}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl bg-gradient-to-tl from-[#3dbe85] via-[#e43db9] to-[#c8e356]">
                        <form className="card-body" onSubmit={handleLogin}>
                            <h3 className='text-xl font-bold mb-4 text-teal-600'>Log in</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            {
                                errorMessage && <p className='text-red-200 italic'>{errorMessage}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn hover:btn-error bg-transparent hover:text-white">Log In</button>
                            </div>
                        </form>
                        {/* Google Register button */}
                        <p className='p-2 text-center font-bold'>Don't  Have an Account ? <br /> <Link to="/register" className='bg-gradient-to-r from-[#3dbe85] via-[#e43db9] to-[#c8e356] text-transparent/50 bg-clip-text underline'>Register</Link></p>
                        <hr />
                        <div className='my-4 space-y-3'>
                            <div className='btn flex justify-center bg-gradient-to-r from-[#3dbe85] via-[#e43db9] to-[#c8e356] text-transparent/50 bg-clip-text cursor-pointer bg-transparent hover:bg-slate-300 hover:border-8' onClick={handleWithGoogle}>
                                <button className='flex items-center justify-around gap-5'>
                                    <span className='text-red-500 text-xl'><FaGoogle></FaGoogle></span>
                                    Continue With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;