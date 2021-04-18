import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../../App';
import './Child.css'
import Table from './Table';

const Child = () => {
    const th3 = 'col-md-3 text-start';
    const th2 = 'col-md-2 text-start';
    const center = 'h-100 d-flex align-items-center custom'

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://protected-citadel-86567.herokuapp.com/getAllBookings')
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
            .catch(err => {
                alert(err);
            })
    }, [])

    return (
        <main className="order-list-parent">
            {/* Top Bar */}
            <section className="top-bar">
                <span>Order List</span>
            </section>
            {/* Inner section */}
            <section className="inner-section">
                <div>

                    {/* Table heading */}
                    <div className="row table-head">
                        <div className={th3}><h5 className={center}>Name</h5></div>
                        <div className={th3}><h5 className={center}>Email ID</h5></div>
                        <div className={th2}><h5 className={center}>Apartment</h5></div>
                        <div className={th2}><h5 className={center}>Payed With</h5></div>
                        <div className={th2}><h5 className={center}>Status</h5></div>
                    </div>

                    {/* Table Body */}
                    {
                        bookings.map(data => <Table data={data} />)
                    }

                </div>
            </section>
        </main>
    );
};

export default Child;
