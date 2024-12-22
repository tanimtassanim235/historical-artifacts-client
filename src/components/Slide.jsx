import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';


const Slide = ({ image, text, p }) => {
    return (
        <div
            className='bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/30 px-6'>
                <div>
                    <h1 className='md:text-3xl font-semibold text-white lg:text-4xl'>
                        {/* {text} */}
                        <Fade
                            // delay={100} // Wait 200ms before starting
                            duration={5000} // Animation lasts 1 second
                            triggerOnce
                            cascade
                            damping={0.01} // Only animate once
                        >
                            {text}
                        </Fade>
                    </h1>
                    <p className='md:text-2xl font-light text-white py-4 px-2 italic'>
                        {p}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide;