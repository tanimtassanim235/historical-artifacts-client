import React, { useEffect, useState } from 'react';
import MyAddedArtifacts from '../components/MyAddedArtifacts';

const MyArtifacts = () => {

    const [art, setArt] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/histories?email=john@john.ed`)
            .then(res => res.json())
            .then(data => {
                setArt(data);
            })
    }, [])
    return (
        <div className='my-14'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    art.length === 0
                        ?
                        <p className='text-2xl text-red-400 font-black'>You Not Added Artifacts</p>
                        :
                        art?.map(singleArt => <MyAddedArtifacts key={singleArt._id} singleArt={singleArt}></MyAddedArtifacts>)
                }
            </div>
        </div>
    );
};

export default MyArtifacts;