import React from 'react';
import './Child.css'
import img from '../../../../../images/random-apartment.jpg';
import Card from '../../../../Home/Apartments/Card';

const randomData = [
    {
        img: img,
        name: 'St. Villa',
        location: 'West Road, Bl',
        price: 470,
        area: 400,
        rooms: 4,
        bathrooms: 3,
        garages: 2,
        status: 'Pending'
    },
    {
        img: img,
        name: 'South Bridge',
        location: 'West Road, Bl',
        price: 250,
        area: 234,
        rooms: 3,
        bathrooms: 2,
        garages: 1,
        status: 'Booked'
    },
    {
        img: img,
        name: 'William Street',
        location: 'West Road, Bl',
        price: 300,
        area: 234,
        rooms: 3,
        bathrooms: 2,
        garages: 1,
        status: 'Cancelled'
    },
]

const Child = () => {

    return (
        <main className="order-list-parent">
            {/* Top Bar */}
            <section className="top-bar">
                <span>Booking List</span>
            </section>
            {/* Inner section */}
            <section className="inner-section">
                {/* CARD */}
                <section>
                    <div className="d-flex justify-content-center align-items-center p-5 flex-wrap">
                        <Card data={randomData[0]} />
                        <Card data={randomData[1]} />
                        <Card data={randomData[2]} />
                    </div>
                </section>
            </section>
        </main>
    );
};

export default Child;