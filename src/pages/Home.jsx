import React from 'react';
import Banner from '../components/Banner';
import Blog from '../components/Blog';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            {/* banner section */}
            <Banner></Banner>
            {/* extra section 01 */}
            <section className='my-12'>
                <Blog></Blog>
            </section>
        </div>
    );
};

export default Home;