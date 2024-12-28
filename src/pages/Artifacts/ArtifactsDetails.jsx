import React, { useContext, useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BiSolidDislike } from 'react-icons/bi';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ArtifactsDetails = () => {
    // load dynamic data for single artifacts details 
    const { _id, name, image, artifactsType, context, createdAt, discoveredPlace, discoveredPerson, currentLocation } = useLoaderData()

    const { user } = useContext(AuthContext);

    const [liked, setLiked] = useState(false)

    const handleLike = (id) => {
        console.log('like button clicked', id);
        // setLiked(!liked)

        const likedBlog = {
            art_id: id,
            liked_email: user.email
        }

        fetch('http://localhost:4000/liked-arts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(likedBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <div class="bg-white">
                <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
                    <div>
                        <h2 class="text-3xl font-bold tracking-tight text-[#3E3B34] shadow-lime-200 shadow-sm  sm:text-4xl">{name}</h2>
                        <p class="mt-4 text-gray-500">{context}</p>
                        <div className='my-8 flex gap-4 items-center'>
                            <button className='px-4 py-3 bg-sky-700 rounded-xl text-xl text-white/80  hover:scale-125' onClick={() => handleLike(_id)}>
                                {
                                    liked && <AiOutlineLike />
                                }
                                {
                                    !liked && <BiSolidDislike />
                                }
                            </button>
                            <p>Total Like: </p>
                        </div>
                        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 text-xl">
                            <div class="pt-4">
                                <dt class="font-medium text-gray-900">Current Location </dt>
                                <dd class="mt-2 text-base text-gray-500">{currentLocation}</dd>
                            </div>
                            <div class="pt-4">
                                <dt class="font-medium text-gray-900">Created At</dt>
                                <dd class="mt-2 text-base text-gray-500">{createdAt}</dd>
                            </div>
                            <div class="pt-4">
                                <dt class="font-medium text-gray-900">Discover Year </dt>
                                <dd class="mt-2 text-base text-gray-500">{discoveredPlace}</dd>
                            </div>
                            <div class="pt-4">
                                <dt class="font-medium text-gray-900">Discovered By</dt>
                                <dd class="mt-2 text-base text-gray-500">{discoveredPerson}</dd>
                            </div>
                            <div class="pt-4">
                                <dt class="font-medium text-gray-900">Type Of Artifact</dt>
                                <dd class="mt-2 text-base text-gray-500">{artifactsType}</dd>
                            </div>
                        </dl>
                    </div>
                    <div class="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                        <img src={image} alt={name} class="rounded-lg bg-gray-100 w-full h-[450px] object-cover" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ArtifactsDetails;