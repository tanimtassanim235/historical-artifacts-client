import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const AddArtifacts = () => {

    const { user } = useContext(AuthContext);
    const navigate = useLocation()

    const AddArtifactsForm = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.nameOne.value;
        const image = form.imageUrl.value;
        const artifactsType = form.type.value;
        const context = form.context.value;
        const createdAt = form.createdAt.value;
        const discoveredPlace = form.discoveredAt.value;
        const discoveredPerson = form.discoveredBy.value;
        const currentLocation = form.location.value;
        const adderName = form.adderName.value;
        const adderEmail = form.adderEmail.value;
        const likeCount = 0;
        const total = { name, image, artifactsType, context, createdAt, discoveredPlace, discoveredPerson, currentLocation, adderName, adderEmail, likeCount }

        console.log(total);

        fetch('http://localhost:4000/history', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(total)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Added',
                        text: 'New Added Artifact Done',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }
    return (
        <div>
            <div className="my-10">
                <Helmet>
                    <title>{navigate.pathname}</title>
                </Helmet>
                <div className="bg-gradient-to-br from-[#3dbe85] via-[#e43db9] to-[#c8e356] py-10">
                    <div className="p-5 bg-transparent w-full max-w-4xl mx-auto shrink-0 shadow-2xl border-2 border-red-600 bg-gradient-to-br from-[#3dbe85] via-[#e43db9] to-[#c8e356]">
                        <h3 className='bg-gradient-to-tr from-[#88f7c5] via-[#f1a4de] to-[#e1fb70] text-transparent bg-clip-text text-2xl md:text-5xl py-3 text-center'>Add Artifacts</h3>
                        <form onSubmit={AddArtifactsForm}>
                            {/* first row */}
                            <div className='flex gap-4 '>
                                <div className="form-control overflow-hidden flex-1">
                                    <label className="label">
                                        <span className="label-text text-white">Artifact Name</span>
                                    </label>
                                    <input type="text" name='nameOne' placeholder="Artifact Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text text-white">Artifact Image (valid URL)
                                        </span>
                                    </label>
                                    <input type="url" name='imageUrl' placeholder="Artifact Image " className="input input-bordered" required />
                                </div>
                            </div>
                            <div className='flex gap-4 '>
                                <div className="form-control overflow-hidden flex-1">
                                    <label className="label">
                                        <span className="label-text text-white">Artifact Type</span>
                                    </label>
                                    <select name='type' defaultValue="Select Artifact Type" className="select select-accent w-full max-w-xs">
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
                                    <input type="text" name='context' placeholder="Historical Context" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className="form-control overflow-hidden flex-1">
                                    <label className="label">
                                        <span className="label-text text-white">Artifacts Adder Name</span>
                                    </label>
                                    <input type="text" name='adderName' defaultValue={user?.displayName} placeholder="Created At" className="input input-bordered" required readOnly />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text text-white">Artifacts Adder Email</span>
                                    </label>
                                    <input type="text" defaultValue={user?.email} name='adderEmail' placeholder="Discovered At" className="input input-bordered" required readOnly />
                                </div>
                            </div>
                            <div className='flex gap-4 '>
                                <div className="form-control overflow-hidden flex-1">
                                    <label className="label">
                                        <span className="label-text text-white">Created At</span>
                                    </label>
                                    <input type="text" name='createdAt' placeholder="Created At" className="input input-bordered" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text text-white">Discovered At</span>
                                    </label>
                                    <input type="text" name='discoveredAt' placeholder="Discovered At (Year)" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className='flex gap-4 '>
                                <div className="form-control overflow-hidden flex-1">
                                    <label className="label">
                                        <span className="label-text text-white">Discovered By</span>
                                    </label>
                                    <input type="text" name='discoveredBy' placeholder="Discovered By" className="input input-bordered" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text text-white">Present Location</span>
                                    </label>
                                    <input type="text" name='location' placeholder="Current Location" className="input input-bordered" required />
                                </div>
                            </div>
                            <input className="btn w-full py-3 mt-6 bg-gradient-to-bl from-[#f1af62] via-[#a0d533] to-[#c8e356] text-white text-xl font-light" type="submit" value="Add Artifacts" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddArtifacts;