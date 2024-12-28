import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BiSolidDislike } from 'react-icons/bi';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const ArtifactsDetails = () => {

    const [detail, setDetails] = useState([])
    const [liked, setLiked] = useState(false)

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/artifacts/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                // setLiked(false)
            })
    }, [id])
    // load dynamic data for single artifacts details 
    // const { _id, name, image, artifactsType, context, createdAt, discoveredPlace, discoveredPerson, currentLocation, likeCount } = useLoaderData()
    const { _id, name, image, artifactsType, context, createdAt, discoveredPlace, discoveredPerson, currentLocation, likeCount } = detail

    const { user } = useContext(AuthContext);


    // const [disliked, setDisliked] = useState(false)
    const navigate = useLocation();

    console.log(navigate.pathname);



    const handleLike = (id) => {
        // console.log('like button clicked', id);
        // setLiked(!liked)
        const likedBlog = {
            art_id: id,
            liked_email: user.email
        }

        // fetch('http://localhost:4000/liked-arts', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(likedBlog)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         fetch(`http://localhost:4000/artifacts/${id}`)
        //             .then(res => res.json())
        //             .then(data => {
        //                 setDetails(data)
        //                 setLiked(true);
        //             })
        //     })

        if (liked) {
            // Dislike logic (decrease like count)
            fetch(`http://localhost:4000/liked-arts?art_id=${id}&liked_email=${user.email}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    setLiked(false);
                    setDetails(prev => ({ ...prev, likeCount: prev.likeCount - 1 }));
                });
        } else {
            // Like logic (increase like count)
            fetch('http://localhost:4000/liked-arts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(likedBlog)
            })
                .then(res => res.json())
                .then(data => {
                    setLiked(true);
                    setDetails(prev => ({ ...prev, likeCount: prev.likeCount + 1 }));
                });
        }
    }
    return (
        <div>
            <div class="bg-white">
                <Helmet>
                    <title>{navigate.pathname}</title>
                </Helmet>
                <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
                    <div>
                        <h2 class="text-3xl font-bold tracking-tight text-[#3E3B34] shadow-lime-200 shadow-sm  sm:text-4xl">{name}</h2>
                        <p class="mt-4 text-gray-500">{context}</p>
                        <div className='my-8 flex gap-4 items-center'>
                            <button className='px-4 py-3 bg-sky-700 rounded-xl text-xl text-white/80  hover:scale-125' onClick={() => handleLike(_id)}>
                                {/* {
                                    liked && <AiOutlineLike />
                                }
                                {
                                    !liked && <BiSolidDislike />
                                } */}

                                {
                                    liked ?
                                        <BiSolidDislike></BiSolidDislike>
                                        :
                                        <AiOutlineLike></AiOutlineLike>
                                }
                            </button>
                            <p>Total Like: {likeCount}</p>
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