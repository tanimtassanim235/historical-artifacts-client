import React, { useEffect, useState } from 'react';
import Artifacts from '../components/Artifacts';

const Allartifacts = () => {

    const [artifacts, setArtifacts] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/histories')
            .then(res => res.json())
            .then(data => setArtifacts(data))
    }, [])
    return (
        <div className='py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    artifacts.map(arti => <Artifacts key={arti._id} art={arti}></Artifacts>)
                }
            </div>
        </div>
    );
};

export default Allartifacts;