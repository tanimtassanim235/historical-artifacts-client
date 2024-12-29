import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Featuer = () => {

    const [feature, setFeature] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/feature')
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])
    return (
        <div className='my-8'>
            <h3 className='text-center font-black text-sky-400 text-3xl my-16 italic'>
                <Typewriter
                    cursor
                    cursorBlinking
                    cursorColor="#0ec3ba"
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={80}
                    words={[
                        'Feature Artifacts'
                    ]}
                />
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    feature?.map((oneFeature) => <FeatureCard oneFeature={oneFeature} key={oneFeature._id}></FeatureCard>)
                }
            </div>

            <div className='text-center'>
                <Link to="/all-artifacts" className='my-10 btn bg-gradient-to-tl from-[#3dbe85] via-[#e43db9] to-[#c8e356] text-white/80 hover:scale-125 '>View All Artifacts</Link>
            </div>
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