import React from 'react';
import Banner from '../components/Banner';
import Blog from '../components/Blog';
import Extra from '../components/Extra';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Featuer from '../components/Featuer';

const Home = () => {
    const navigate = useLocation()
    // console.log(navigate);
    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
                <title>Home | {navigate.pathname}</title>
            </Helmet>
            {/* banner section */}
            <Banner></Banner>
            {/* extra section 01 */}
            <section>
                <Featuer></Featuer>
            </section>
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