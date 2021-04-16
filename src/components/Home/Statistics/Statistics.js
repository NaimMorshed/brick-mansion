import React from 'react';
import './Statistics.css';

const Statistics = () => {
    return (
        <div className="App statistics-background mt-5 mb-5">
            <section className="display-flex p-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 pt-4 pb-4">
                            <span className="stat-num">2560</span>
                            <span className="stat-text">Clients</span>
                        </div>
                        <div className="col-md-3 col-sm-3 pt-4 pb-4">
                            <span className="stat-num">3055</span>
                            <span className="stat-text">Booking</span>
                        </div>
                        <div className="col-md-3 col-sm-3 pt-4 pb-4">
                            <span className="stat-num">50</span>
                            <span className="stat-text">Swimming</span>
                        </div>
                        <div className="col-md-3 col-sm-3 pt-4 pb-4">
                            <span className="stat-num">1530</span>
                            <span className="stat-text">Apartment</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Statistics;