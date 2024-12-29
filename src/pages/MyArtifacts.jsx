import React, { useContext, useEffect, useState } from 'react';
import MyAddedArtifacts from '../components/MyAddedArtifacts';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyArtifacts = () => {

    const [art, setArt] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useLocation()

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        // fetch(`https://history-server-zeta.vercel.app/histories?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setArt(data);
        //     })

        axios.get(`https://history-server-zeta.vercel.app/histories?email=${user?.email}`, {
            withCredentials: true
        })
            .then(res => setArt(res.data))

        // axiosSecure.get(`histories?email=${user?.email}`)
        //     .then(res => setArt(res.data));


    }, [user?.email])

    return (
        <div className='my-14'>
            <Helmet>
                <title>{navigate.pathname}</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto'>
                {
                    art.length === 0
                        ?
                        <p className='text-2xl text-red-400 font-black'>You Not Added Artifacts</p>
                        :
                        art?.map(singleArt => <MyAddedArtifacts key={singleArt._id} singleArt={singleArt} setArt={setArt} art={art}></MyAddedArtifacts>)
                }
            </div>
        </div>
    );
};

export default MyArtifacts;