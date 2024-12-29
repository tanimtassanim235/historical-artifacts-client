import React, { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaLocationPin, FaPlaceOfWorship } from 'react-icons/fa6';
import { FcEditImage } from 'react-icons/fc';
import { LiaEdit } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyAddedArtifacts = ({ singleArt, art, setArt }) => {
    const { _id, name, image, artifactsType, createdAt, discoveredPlace, discoveredPerson, currentLocation, adderName, adderEmail, context } = singleArt;

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const axiosSecure = useAxiosSecure()

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
                fetch(`https://history-server-zeta.vercel.app/histories/${_id}`, {
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
                            navigate('/all-artifacts')
                        }
                    })

            }
        });
    }

    const handUpdate = e => {
        e.preventDefault()
        // const formData = new FormData(e.target);
        // const testData = Object.fromEntries(formData.entries())
        // console.log(testData);

        const form = e.target;
        const name = form.nameOne.value;
        const image = form.imageUrl.value;
        const artifactsType = form.type.value;
        const context = form.context.value;
        const createdAt = form.createdAt.value;
        const discoveredPlace = form.discoveredAt.value;
        const discoveredPerson = form.discoveredBy.value;
        const currentLocation = form.location.value;
        const adderName = user?.displayName;
        const adderEmail = user?.email;
        const total = { name, image, artifactsType, context, createdAt, discoveredPlace, discoveredPerson, currentLocation, adderName, adderEmail }

        document.getElementById(`${_id}`).close()


        // send data to the server
        fetch(`https://history-server-zeta.vercel.app/histories/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(total)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                fetch(`https://history-server-zeta.vercel.app/histories?email=${user?.email}`)
                    .then(res => res.json())
                    .then(data => {
                        setArt(data)
                    })
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Added',
                        text: 'Artifact Updated Done',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })

        // axiosSecure.put(`/histories/${_id}`, total)
        //     .then((res) => {
        //         axiosSecure.get(`histories?email=${user?.email}`)
        //             .then((res) => {
        //                 setArt(res.data)
        //                 if (res.data.modifiedCount > 0) {
        //                     Swal.fire({
        //                         title: 'Updated',
        //                         text: 'Artifact Updated Done',
        //                         icon: 'success',
        //                         confirmButtonText: 'Close'
        //                     })
        //                 }
        //             })
        //     })
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
                        <button className='' onClick={() => document.getElementById(`${_id}`).showModal()}>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}

                            {/* Modal Info */}
                            <dialog id={`${_id}`} className="modal modal-bottom sm:modal-middle border-2 border-green-500">
                                <div className="modal-box border-2 border-yellow-500">
                                    <div className="p-5 bg-transparent w-full max-w-4xl  shrink-0 shadow-2xl border-2 border-red-600 bg-gradient-to-tl from-[#3dbe85] via-[#e43db9] to-[#c8e356]">
                                        <h3 className='bg-gradient-to-tr from-[#88f7c5] via-[#f1a4de] to-[#e1fb70] text-transparent bg-clip-text text-2xl md:text-5xl py-3 text-center'>Add Artifacts</h3>
                                        <form onSubmit={handUpdate}>
                                            {/* first row */}
                                            <div className='flex gap-4 '>
                                                <div className="form-control overflow-hidden flex-1">
                                                    <label className="label">
                                                        <span className="label-text text-white">Artifact Name</span>
                                                    </label>
                                                    <input type="text" name='nameOne' defaultValue={name} placeholder="Artifact Name" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control flex-1">
                                                    <label className="label">
                                                        <span className="label-text text-white">Artifact Image (valid URL)
                                                        </span>
                                                    </label>
                                                    <input type="url" name='imageUrl'
                                                        defaultValue={image} placeholder="Artifact Image " className="input input-bordered" required />
                                                </div>
                                            </div>
                                            <div className='flex gap-4 '>
                                                <div className="form-control overflow-hidden flex-1">
                                                    <label className="label">
                                                        <span className="label-text text-white">Artifact Type</span>
                                                    </label>
                                                    <select name='type' defaultValue={artifactsType} className="select select-accent w-full max-w-xs">
                                                        <option disabled>Select Artifact Type</option>
                                                        <option value="tools">Tools</option>
                                                        <option value="weapons">Weapons</option>
                                                        <option value="documents">Documents</option>
                                                        <option value="writings">Writings</option>
                                                    </select>
                                                </div>
                                                <div className="form-control flex-1">
                                                    <label className="label">
                                                        <span className="label-text text-white">Historical Context</span>
                                                    </label>
                                                    <input type="text" name='context'
                                                        defaultValue={context} placeholder="Historical Context" className="input input-bordered" required />
                                                </div>
                                            </div>
                                            <div className='flex gap-4 '>
                                                <div className="form-control overflow-hidden flex-1">
                                                    <label className="label">
                                                        <span className="label-text text-white">Created At</span>
                                                    </label>
                                                    <input type="text"
                                                        defaultValue={createdAt} name='createdAt' placeholder="Created At" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control flex-1">
                                                    <label className="label">
                                                        <span className="label-text text-white">Discovered At</span>
                                                    </label>
                                                    <input type="text"
                                                        defaultValue={discoveredPlace} name='discoveredAt' placeholder="Discovered At (Year)" className="input input-bordered" required />
                                                </div>
                                            </div>
                                            <div className='flex gap-4 '>
                                                <div className="form-control overflow-hidden flex-1">
                                                    <label className="label">
                                                        <span className="label-text text-white">Discovered By</span>
                                                    </label>
                                                    <input type="text"
                                                        defaultValue={discoveredPerson}
                                                        name='discoveredBy' placeholder="Discovered By" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control flex-1">
                                                    <label className="label">
                                                        <span className="label-text text-white">Present Location</span>
                                                    </label>
                                                    <input type="text" name='location'
                                                        defaultValue={currentLocation}
                                                        placeholder="Current Location" className="input input-bordered" required />
                                                </div>
                                            </div>
                                            <input className="btn w-full py-3 mt-6 bg-gradient-to-l from-[#f1af62] via-[#a0d533] to-[#c8e356] text-white text-xl font-bold" type="submit" value="Update Artifact Data" />
                                        </form>
                                    </div>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            {/* <button className="btn">Close</button> */}
                                        </form>
                                    </div>
                                </div>
                            </dialog>
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