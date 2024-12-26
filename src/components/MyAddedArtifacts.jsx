import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaLocationPin, FaPlaceOfWorship } from 'react-icons/fa6';
import { FcEditImage } from 'react-icons/fc';
import { LiaEdit } from 'react-icons/lia';

const MyAddedArtifacts = ({ singleArt }) => {
    console.log(singleArt);
    const { name, image, artifactsType, createdAt, discoveredPlace, discoveredPerson, currentLocation, adderName, adderEmail, context } = singleArt
    return (
        <div>
            {/* card main div */}
            <div className='px-3 py-6 border-2 border-lime-500 bg-white/55'>
                {/* image div */}
                <div>
                    <img src={image} className='w-full h-[340px] object-cover rounded-s-xl rounded-ee-btn' alt={name} />
                </div>
                {/* other content div */}
                <div className='text-lg'>
                    <div className='flex justify-evenly my-4 text-2xl'>
                        <button className=''>
                            <LiaEdit></LiaEdit>
                        </button>
                        <button>
                            <AiFillDelete></AiFillDelete>
                        </button>
                    </div>
                    <div className='flex items-center gap-3 py-2'>
                        <FaPlaceOfWorship className='text-blue-300'></FaPlaceOfWorship>
                        <p className='text-xl'>Current Location:  <span className='font-bold'>{currentLocation}</span></p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaCalendarAlt className='text-blue-300'></FaCalendarAlt>
                        <p>Created Time Period:  <span className='font-bold text-gray-700'>{createdAt}</span></p>
                    </div>
                    <div className='flex items-center gap-3 py-2'>
                        <BiWorld></BiWorld>
                        <p>Discoverd By:  <span className='font-bold text-gray-700'>{discoveredPerson}</span></p>
                    </div>
                    <div className='flex items-center gap-3 '>
                        <FcEditImage></FcEditImage>
                        <p>Type of Artifacts:  <span className='font-bold text-gray-700'>{artifactsType}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAddedArtifacts;