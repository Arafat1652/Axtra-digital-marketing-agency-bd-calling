import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import WeAre from './WeAre';
import Services from './Services';
import ServiceCard from './ServiceCard';
import Fetaured from './Fetaured';
import Review from './Review';
import HorizontalScroll from './HorizontalScroll';
import Faq from './Faq';
import RecentBlog from './RecentBlog';
import ReadBlog from './ReadBlog';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Brands/>
            <WeAre/>
            <Services/>
            <ServiceCard/>
            <Fetaured/>
            <Review/>
            <HorizontalScroll/>
            <Faq/>
            <RecentBlog/>
            <ReadBlog/>
            <Footer/>
        </div>
    );
};

export default Home;