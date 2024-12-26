import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerLottie from '../assets/lottie/register.json'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
const Register = () => {

    const { signUpUser, updateUserProfile, googleSignIn, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [errorMessage, setErrorMessage] = useState('');


    // register functionality
    const handleRegister = e => {
        setErrorMessage('');
        setError({})
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        const passValidate = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passValidate.test(password)) {
            setError({ ...error, password: "One UpperCase , One LowerCase & 6 digit " })
            return
        }

        signUpUser(email, password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        // setUser({ displayName: name, photoURL: photo })
                        setUser((prev) => {
                            return { ...prev, displayName: name, photoURL: photo }
                        })
                        toast.success("Successful Registered !", {
                            position: "top-center"
                        });
                        navigate("/")
                    })
                    .catch((err) => {

                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMes = error.message;
                setErrorMessage(errorMes)
            })
    }


    // Google SignUP funconality 

    const handleGoogle = () => {
        googleSignIn()
            .then((res) => {
                const user = res.user;
                setUser(user)
                toast.success("Nice Sign Up with Google !", {
                    position: "top-right"
                });
                navigate("/")

            })
            .catch((error) => {
                setErrorMessage(error.message)
            })
    }
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left ">
                        <Lottie animationData={registerLottie} loop={true}></Lottie>
                    </div>
                    <div className="card w-full max-w-sm shrink-0 border-2 border-lime-200 bg-gradient-to-bl from-[#3dbe85] via-[#e43db9] to-[#c8e356]">
                        <form className="card-body" onSubmit={handleRegister}>
                            <h3 className='text-xl font-bold mb-4 text-[#c3dcd1]'>Create An Account</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            {
                                error.password && (
                                    <label className="label text-red-200 italic">
                                        {error.password}
                                    </label>
                                )
                            }
                            {
                                errorMessage && <p className='text-2xl text-red-200'>{errorMessage}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-error text-white" >Register Account</button>
                            </div>
                            {/* Google Register button */}
                            <p className='p-2 text-center font-bold'>Already Have an Account ? <br /> <Link to="/login" className='bg-gradient-to-r from-[#3dbe85] via-[#e43db9] to-[#c8e356] text-transparent/50 bg-clip-text underline'>Log in</Link></p>
                            <hr />
                            <div className='my-4 space-y-3'>
                                <div className='btn flex justify-center bg-gradient-to-r from-[#3dbe85] via-[#e43db9] to-[#c8e356] text-transparent/50 bg-clip-text cursor-pointer bg-transparent hover:bg-slate-300 hover:border-8' onClick={handleGoogle} >
                                    <button className='flex items-center justify-around gap-5'>
                                        <span className='text-red-500 text-xl'><FaGoogle></FaGoogle></span>
                                        Continue With Google</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;