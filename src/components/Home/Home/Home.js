import React from 'react';
import Agents from '../Agents/Agents';
import Apartments from '../Apartments/Apartments';
import ContactUs from '../ContactUs/ContactUs';
import Featured from '../Featured/Featured';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Reviews from '../Reviews/Reviews';
import Statistics from '../Statistics/Statistics';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="container-fluid">
            <Header />
            <HeaderMain />
            <Featured />
            <Apartments />
            <Reviews />
            <Agents />
            <Statistics />
            <ContactUs />
            <Footer />

            <div className="text-center bg-dark text-white">
                <span>&copy; 2021 All Rights Reserved</span>
            </div>
        </div>
    );
};

export default Home;