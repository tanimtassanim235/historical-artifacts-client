import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaLocationPin, FaPlaceOfWorship } from 'react-icons/fa6';
import { FcEditImage } from 'react-icons/fc';
import { LiaEdit } from 'react-icons/lia';
import Swal from 'sweetalert2';

const MyAddedArtifacts = ({ singleArt, art, setArt }) => {
    const { _id, name, image, artifactsType, createdAt, discoveredPlace, discoveredPerson, currentLocation, adderName, adderEmail, context } = singleArt;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/histories/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        const remainingArt = art.filter((singleData) => _id != singleData?._id);
                        setArt(remainingArt)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Added Artifacts has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            {/* card main div */}
            <div className='px-3 py-6 border-2 border-lime-500 bg-white/55'>
                {/* image div */}
                <div>
                    <img src={image} className='w-full h-[340px] object-cover rounded-s-xl rounded-ee-btn' alt={name} />
                </div>
                {/* other content div */}
                <div className='text-lg px-3'>
                    <div className='flex justify-evenly my-4 text-2xl'>
                        <button className=''>
                            <LiaEdit></LiaEdit>
                        </button>
                        <button className='hover:scale-110 hover:text-red-500' onClick={() => handleDelete(_id)}>
                            <AiFillDelete></AiFillDelete>
                        </button>
                    </div>
                    <div className='flex items-center gap-3 py-2'>
                        <FaPlaceOfWorship className='text-blue-300 text-xl'></FaPlaceOfWorship>
                        <p>Current Location:  <span className='font-bold'>{currentLocation}</span></p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaCalendarAlt className='text-blue-300 text-xl'></FaCalendarAlt>
                        <p>Created Time Period:  <span className='font-bold text-gray-700'>{createdAt}</span></p>
                    </div>
                    <div className='flex items-center gap-3 py-2'>
                        <BiWorld></BiWorld>
                        <p>Discoverd By:  <span className='font-bold text-gray-700 '>{discoveredPerson}</span></p>
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