import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

const Featuer = () => {

    const [feature, setFeature] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/feature')
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])
    return (
        <div className='my-8'>
            <h3 className='text-center font-black text-sky-400 text-3xl '>Feature Artifacts</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
                {
                    feature?.map((oneFeature) => <FeatureCard oneFeature={oneFeature} key={oneFeature._id}></FeatureCard>)
                }
            </div>

            <button></button>
        </div>
    );
};

export default Featuer;

/**
 * 
 * server ee query email er modee. verify token dilee all-artifacts page ee 404 show kore...
2. added artifacts ee kivave token diye korboo.
3. optional (keyboard ee space press korlee pore digit gula delete koyee jayy.)
 */