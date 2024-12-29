import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import LikedArt from '../../components/LikedArt';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MylikedArt = () => {

    const [mylike, setMyLike] = useState([])
    const { user } = useContext(AuthContext)
    console.log(user?.email);

    const location = useLocation()

    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        // fetch(`http://localhost:4000/liked-art?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setMyLike(data);
        //     })

        // axios.get(`http://localhost:4000/liked-art?email=${user?.email}`, { withCredentials: true })
        //     .then(res => setMyLike(res.data))

        axiosSecure.get(`liked-art?email=${user?.email}`)
            .then(res => setMyLike(res.data))

    }, [user?.email])

    console.log(mylike);
    return (
        <div className='my-10'>
            <Helmet>
                <title>{location.pathname}</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-11/12 mx-auto'>
                {
                    mylike.length === 0
                        ?
                        <p className='text-red-600 text-2xl font-black'>No Artifacts Added By You</p>
                        :
                        mylike?.map(liked => <LikedArt key={liked._id} liked={liked}></LikedArt>)
                }
            </div>
        </div>
    );
};

export default MylikedArt;