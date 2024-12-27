import React, { useEffect, useState } from 'react';
import Artifacts from '../components/Artifacts';

const Allartifacts = () => {

    const [artifacts, setArtifacts] = useState([])
    const [search, setSearch] = useState("")

    console.log(search);

    useEffect(() => {
        fetch('http://localhost:4000/histories')
            .then(res => res.json())
            .then(data => setArtifacts(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:4000/histories?searchParams=${search}`)
            .then(res => res.json())
            .then(data => setArtifacts(data))
    }, [search])
    return (
        <div className='py-16 w-11/12 mx-auto'>
            <input
                type="text"
                placeholder="Search here"
                onChange={(e) => setSearch(e.target.value)}
                className="input input-bordered input-error w-full max-w-5xl mx-auto mb-14" />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    artifacts.map(arti => <Artifacts key={arti._id} art={arti}></Artifacts>)
                }
            </div>
        </div>
    );
};

export default Allartifacts;