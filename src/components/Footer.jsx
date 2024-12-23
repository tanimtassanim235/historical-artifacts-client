import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-10 px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div>
                    <h2 className="text-3xl font-bold  flex items-center bg-gradient-to-r from-[#3dbe85] via-[#e43db9] to-[#c8e356] text-transparent bg-clip-text">
                        Antike<span className="text-red-500">☥</span>i
                    </h2>
                    <p className="mt-4">
                        A web application for tracking historical artifacts.
                        The application will allow users to browse artifacts, view details, and add their own entries.
                    </p>
                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-6">
                        <a
                            href="#"
                            className="w-10 h-10 bg-gray-700 hover:bg-yellow-500 flex items-center justify-center rounded"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 bg-gray-700 hover:bg-yellow-500 flex items-center justify-center rounded"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 bg-gray-700 hover:bg-yellow-500 flex items-center justify-center rounded"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 bg-gray-700 hover:bg-yellow-500 flex items-center justify-center rounded"
                        >
                            <i className="fab fa-google"></i>
                        </a>
                    </div>
                </div>

                {/* Information Links */}
                <div>
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-[#3dbe85] via-[#e43db9] to-[#c8e356] inline-block text-transparent bg-clip-text">Information</h3>
                    <div className="mt-4 space-y-2">
                        <a href="#" className="hover:text-yellow-500 ">
                            About
                        </a>
                        <a href="#" className="hover:text-yellow-500 ml-4">
                            History
                        </a>
                        <a href="#" className="hover:text-yellow-500 ml-4">
                            Gallery
                        </a>
                        <a href="#" className="hover:text-yellow-500 ml-4">
                            Event
                        </a>
                        <a href="#" className="hover:text-yellow-500 ml-4">
                            Contact
                        </a>
                    </div>
                </div>

                {/* Recent Exhibition */}
                <div>
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-[#3dbe85] via-[#e43db9] to-[#c8e356] inline-block text-transparent bg-clip-text">Recent Exhibition</h3>
                    <div className="mt-4 space-y-6">
                        {/* Exhibition Item */}
                        <div className="flex space-x-4">
                            <img
                                src="https://i.ibb.co.com/hXtgygQ/footer.jpg"
                                alt="Exhibition 1"
                                className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                                <h4 className="text-gray-300">Egypt Measure</h4>
                                <p className="text-sm">
                                    Friday To Sunday: 9 AM - 12 PM
                                </p>
                            </div>
                        </div>
                        {/* Exhibition Item */}
                        <div className="flex space-x-4">
                            <img
                                src="https://i.ibb.co.com/JqRXjBj/photo-1673450021553-fdfce17de0e7-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg"
                                alt="Exhibition 2"
                                className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                                <h4 className="text-gray-300">Indian Measure</h4>
                                <p className="text-sm">
                                    Friday To Sunday: 12 PM - 5 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;