import React from 'react';
import Banner from '../components/Banner';
import Blog from '../components/Blog';
import Extra from '../components/Extra';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            {/* banner section */}
            <Banner></Banner>
            {/* extra section 01 */}
            <section className='my-8'>
                <Blog></Blog>
            </section>
            <section>
                <Extra></Extra>
            </section>
        </div>
    );
};

export default Home;