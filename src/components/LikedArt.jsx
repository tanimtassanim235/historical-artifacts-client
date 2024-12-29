import React from 'react';

const LikedArt = ({ liked }) => {
    const { name, _id, image, createdAt, currentLocation, liked_email, artifactsType, context } = liked
    return (
        <div>
            <div className="card image-full">
                <div>
                    <img
                        src={image}
                        alt={name}
                        className='object-cover w-full h-[280px] rounded-xl' />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{context?.slice(0, 180)}...{""}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-error">{artifactsType}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LikedArt;