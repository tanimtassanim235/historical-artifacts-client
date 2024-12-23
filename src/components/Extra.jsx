import hall from '../assets/over.jpg'
import { Fade, Roll, Slide } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';

const Extra = () => {

    return (
        <div>
            <div className="p-8 lg:p-16">
                {/* Header Section */}
                <div className="text-center">
                    <Slide direction="up" duration={2000} >
                        <h1 className="text-4xl font-bold text-gray-800 uppercase">
                            Welcome to  <span className="text-yellow-500">
                                <Fade delay={1e3} cascade damping={0.05} duration={2000}>
                                    our Historical Artifacts Collection
                                </Fade>
                            </span>
                        </h1>
                    </Slide>
                    <p className="text-lg text-gray-500 mt-2"><Roll delay={1e3} cascade damping={0.05}>
                        History
                    </Roll></p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row mt-12 lg:mt-16">
                    {/* Left Section - Image */}
                    <div className="lg:w-1/2">
                        <img
                            src={hall}
                            alt="Museum Interior"
                            className="h-full w-full  object-cover  rounded-lg shadow-md"
                        />
                    </div>

                    {/* Right Section - Text Content */}
                    <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
                        <h2 className="text-2xl font-bold text-gray-800">
                            The Great Museum
                            <br />
                            <Typewriter
                                cursor
                                cursorBlinking
                                cursorColor="#0ec3ba"
                                delaySpeed={1000}
                                deleteSpeed={25}
                                loop={0}
                                typeSpeed={75}
                                words={[
                                    'Estimated by Asian in 1961'
                                ]}
                            />
                            <br />
                            {/* <span className="text-yellow-500">Estimated by Romans in 1961</span> */}
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Give us any chance, we'll take it. Give us any rule, we'll break it.
                            We're gonna make our dreams come true. They were four men living all
                            together.
                        </p>

                        {/* Timeline Section */}
                        <div className="mt-8 space-y-8">
                            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                                <li>
                                    {/* first timeline */}
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="#3dbe85"
                                            className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="timeline-start mb-10 md:text-end">
                                        <time className="font-mono italic bg-gradient-to-r from-[#3dbe85] via-[#e43db9] to-[#c8e356] inline-block text-transparent bg-clip-text">March 1961
                                            {/* #26d0ce */}
                                            {/* #1a2980 */}
                                        </time>
                                        <br />
                                        The establishment of our museum, with two professional tourist agents, in small office in Boston.
                                    </div>
                                    <hr className='bg-gradient-to-r from-[#e2788d]  to-[#78e2cd]' />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="#3dbe85"
                                            className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="timeline-end mb-10">
                                        <time className="font-mono italic bg-gradient-to-r from-[#3dbe85] via-[#e43db9] to-[#c8e356] inline-block text-transparent bg-clip-text">June 1998</time>
                                        <br />
                                        Last of Americas deep space probes. If you have a problem if no one else can help and if you
                                    </div>
                                    <hr className='bg-gradient-to-r from-[#e2788d]  to-[#78e2cd] bg-transparent inline-block' />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="#3dbe85"
                                            className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="timeline-start mb-10 md:text-end">
                                        <time className="font-mono italic bg-gradient-to-r from-[#3dbe85] via-[#e43db9] to-[#c8e356] inline-block text-transparent bg-clip-text">May 2004</time>
                                        <br />
                                        Last of Americas deep space probes. If you have a problem if no one else can help and if you
                                    </div>
                                    <hr className='bg-gradient-to-r from-[#e2788d]  to-[#78e2cd]' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra;