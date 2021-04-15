import React from 'react';
import Apartments from '../Apartments/Apartments';
import Featured from '../Featured/Featured';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';

const Home = () => {
    return (
        <div>
            <Header />
            <HeaderMain />
            <Featured />
            <Apartments />
        </div>
    );
};

export default Home;