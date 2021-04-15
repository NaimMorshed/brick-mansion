import React from 'react';
import Agents from '../Agents/Agents';
import Apartments from '../Apartments/Apartments';
import Featured from '../Featured/Featured';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header />
            <HeaderMain />
            <Featured />
            <Apartments />
            <Reviews />
            <Agents />
        </div>
    );
};

export default Home;