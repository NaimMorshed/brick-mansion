import React from 'react';
import './Child.css'
import Table from './Table';
const infoData = [
    {
        name: 'Naim Morshed',
        email: 'naim@gmail.com',
        apartment: 'St. Villa',
        pay: 'Card',
        status: 'Pending'
    },
    {
        name: 'Sabit Hassan',
        email: 'sabit@gmail.com',
        apartment: 'St. Deep',
        pay: 'Card',
        status: 'Rejected'
    }
]

const Child = () => {
    const th3 = 'col-md-3 text-start';
    const th2 = 'col-md-2 text-start';
    const center = 'h-100 d-flex align-items-center'
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
                        <div className={th2}><h5 className={center}>Pay With</h5></div>
                        <div className={th2}><h5 className={center}>Status</h5></div>
                    </div>

                    {/* Table Body */}
                    {
                        infoData.map(data => <Table data={data} />)
                    }

                </div>
            </section>
        </main>
    );
};

export default Child;
