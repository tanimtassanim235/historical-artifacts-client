import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ oneFeature }) => {
    const { name, image, context, likeCount, _id } = oneFeature;

    return (
        <div>
            <div className="card card-compact  shadow-xl">
                <div>
                    <img
                        className='w-full h-[250px] object-cover'
                        src={image}
                        alt={name} />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{context.slice(0, 150)}...{""}
                    </p>
                    <div className="card-actions justify-evenly">
                        <Link to={`/artifacts/${_id}`} className="border-s-lime-400 border-r-red-400 border-t-purple-400 p-3 bg-lime-400 rounded-xl">View Details </Link>
                        <button className='btn btn-success'>{likeCount}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;