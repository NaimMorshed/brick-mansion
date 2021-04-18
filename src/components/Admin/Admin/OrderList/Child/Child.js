import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../../App';
import './Child.css'
import Table from './Table';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
const backdropUseStyles = makeStyles((theme) => ({ backdrop: { zIndex: theme.zIndex.drawer + 1, color: '#fff' } }));

const Child = () => {
    // -------- BACKDROP --------
    const backdropClasses = backdropUseStyles();
    const [backOpen, setBackOpen] = React.useState(false);
    const backdropClose = () => setBackOpen(false);
    const backdropOpen = () => setBackOpen(!backOpen);

    const th3 = 'col-md-3 text-start';
    const th2 = 'col-md-2 text-start';
    const center = 'h-100 d-flex align-items-center custom'

    const history = useHistory();
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        backdropOpen();
        fetch('https://protected-citadel-86567.herokuapp.com/getAllBookings')
            .then(res => res.json())
            .then(data => {
                backdropClose();
                setBookings(data)
            })
            .catch(err => {
                backdropClose();
                alert(err);
            })
    }, [])

    return (
        <main className="order-list-parent">
            {/* Top Bar */}
            <section className="top-bar">
                <span className="vanish"></span>
                <span>Booking List</span>
                <button onClick={() => history.push('/')} className="btn btn-info home-button">Home</button>
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

            {/* BACKDROP */}
            <Backdrop className={backdropClasses.backdrop} open={backOpen}>
                <CircularProgress color="inherit" />
            </Backdrop>
            {/* ----------- */}
        </main>
    );
};

export default Child;
