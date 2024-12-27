import React from 'react';
import { Link } from 'react-router-dom';

const Artifacts = ({ art }) => {
    const { _id, name, image, currentLocation, artifactsType, context } = art
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <div>
                    <img
                        className='object-cover w-full h-[350px]  border-2 border-red-400'
                        src={image}
                        alt={name} />
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>{context.slice(0, 180)}...{""}</p>
                    <div className="card-actions justify-between mt-4">
                        <Link to={`/artifacts/${_id}`} className="badge badge-outline cursor-pointer   font-black text-xl border-s-lime-400 border-r-red-400 border-t-purple-400 p-3 bg-lime-400 bg-gradient-to-tl from-[#3dbe85] via-[#e43db9] to-[#c8e356] text-white/80 hover:scale-125">View Details</Link>
                        <div className="badge badge-outline p-3 text-red-400 text-xl border-purple-500 ">{artifactsType}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Artifacts;