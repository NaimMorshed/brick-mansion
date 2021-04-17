import React, { useContext, useEffect, useState } from 'react';
import './Child.css'
import img from '../../../../../images/random-apartment.jpg';
import Card from '../../../../Home/Apartments/Card';
import { UserContext } from '../../../../../App';

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

    const [bookings, setBookings] = useState([]);
    const [authentication, setAuthentication] = useContext(UserContext);

    useEffect(() => {
        fetch('https://protected-citadel-86567.herokuapp.com/getBookings?token='+authentication.email)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
            .catch(err => {
                alert(err);
            })
    }, [authentication.email])

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
                        {
                            bookings.map(data => <Card data={data} />)
                        }
                    </div>
                </section>
            </section>
        </main>
    );
};

export default Child;