import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="bg-white py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:mx-0">
                        <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the blog</h2>
                        <p class="mt-2 text-lg/8 text-gray-600">Learn the History of Major destory cities .</p>
                    </div>
                    <div class="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {/* article 1 */}
                        <article class="flex max-w-xl flex-col items-start justify-between bg-gradient-to-r from-[#525252] to-[#3d72b4] p-5 rounded-lg">
                            <div class="flex items-center gap-x-4 text-xs">
                                <time datetime="2020-03-16" class="text-gray-500">Dec 22, 2024</time>
                                <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Science</a>
                            </div>
                            <div class="group relative">
                                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-50">
                                    <a href="#">
                                        <span class="absolute inset-0"></span>
                                        4 King Tut Artifacts You’ll Find at the Grand Egyptian Museum
                                    </a>
                                </h3>
                                <p class="mt-5 line-clamp-3 text-sm/6 text-gray-200">The Grand Egyptian Museum has been in the works for over two decades. Construction ground to a halt during the Arab Spring a decade ago but the museum, which is set to fully open in the coming months, will be the largest archeological complex in the world, housing some of Egypt’s greatest treasures.</p>
                            </div>
                            <div class="relative mt-8 flex items-center gap-x-4">
                                <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-12 rounded-full bg-gray-50" />
                                <div class="text-sm/6">
                                    <p class="font-semibold text-gray-400">
                                        <a href="#">
                                            <span class="absolute inset-0"></span>
                                            Michael Foster
                                        </a>
                                    </p>
                                    <p class="text-white">Co-Founder / CTO</p>
                                </div>
                            </div>
                        </article>
                        {/* article 2 */}
                        <article class="flex max-w-xl flex-col items-start justify-between bg-gradient-to-r from-[#525252] to-[#3d72b4] p-5 rounded-lg">
                            <div class="flex items-center gap-x-4 text-xs">
                                <time datetime="2020-03-16" class="text-gray-500">Dec 20, 2020</time>
                                <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">History</a>
                            </div>
                            <div class="group relative">
                                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-50">
                                    <a href="#">
                                        <span class="absolute inset-0"></span>
                                        Dead Sea Scrolls
                                    </a>
                                </h3>
                                <p class="mt-5 line-clamp-3 text-sm/6 text-gray-100">In 1947, Muhammed ed-Dib, a Bedouin shepherd, went searching for a stray goat along craggy cliffs banking the Dead Sea. What began as a goat pursuit resulted in one of the greatest archaeological discoveries of the 20th century: In a narrow cave, ed-Dib discovered clay jars stuffed with ancient scrolls — the first of nearly 1,000 tattered texts written between 300 B.C. and A.D. 70 that comprise the Dead Sea Scrolls.</p>
                            </div>
                            <div class="relative mt-8 flex items-center gap-x-4">
                                <img src="https://i.ibb.co.com/P4rfvrP/root.jpg" alt="" class="size-12 rounded-full bg-gray-50" />
                                <div class="text-sm/6">
                                    <p class="font-semibold text-gray-400">
                                        <a href="#">
                                            <span class="absolute inset-0"></span>
                                            Joy Root
                                        </a>
                                    </p>
                                    <p class="text-gray-100">Expert in History</p>
                                </div>
                            </div>
                        </article>
                        {/* article 3 */}
                        <article class="flex max-w-xl flex-col items-start justify-between bg-gradient-to-r from-[#525252] to-[#3d72b4] p-5 rounded-lg">
                            <div class="flex items-center gap-x-4 text-xs">
                                <time datetime="2020-03-16" class="text-gray-500">25 Dec, 2024</time>
                                <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Fact</a>
                            </div>
                            <div class="group relative">
                                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-50">
                                    <a href="#">
                                        <span class="absolute inset-0"></span>
                                        Pyramids
                                    </a>
                                </h3>
                                <p class="mt-5 line-clamp-3 text-sm/6 text-gray-400">Ancient Egyptians during the third and fourth dynasties perfected the construction of pyramids as burial chambers for their kings.</p>
                            </div>
                            <div class="relative mt-8 flex items-center gap-x-4">
                                <img src="https://i.ibb.co.com/cDJcZPR/hasan.jpg" alt="" class="size-12 rounded-full bg-gray-50" />
                                <div class="text-sm/6">
                                    <p class="font-semibold text-gray-400">
                                        <a href="#">
                                            <span class="absolute inset-0"></span>
                                            Sakib Al Hasan
                                        </a>
                                    </p>
                                    <p class="text-gray-50">Artifacts Bussinessman</p>
                                </div>
                            </div>
                        </article>

                        {/* <!-- More posts... --> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;