import React, { useContext, useEffect, useState } from 'react';
import './Child.css'
import img from '../../../../../images/random-apartment.jpg';
import Card from '../../../../Home/Apartments/Card';
import { UserContext } from '../../../../../App';
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

    const history = useHistory();
    const [bookings, setBookings] = useState([]);
    const [authentication, setAuthentication] = useContext(UserContext);

    useEffect(() => {
        backdropOpen();
        fetch('https://protected-citadel-86567.herokuapp.com/getBookings?token=' + authentication.email)
            .then(res => res.json())
            .then(data => {
                backdropClose();
                setBookings(data)
            })
            .catch(err => {
                backdropClose();
                alert(err);
            })
    }, [authentication.email])

    return (
        <main className="order-list-parent">
            {/* Top Bar */}
            <section className="top-bar">
                <span className="vanish"></span>
                <span>My Bookings</span>
                <button onClick={() => history.push('/')} className="btn btn-info home-button">Home</button>
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
            {/* BACKDROP */}
            <Backdrop className={backdropClasses.backdrop} open={backOpen}>
                <CircularProgress color="inherit" />
            </Backdrop>
            {/* ----------- */}
        </main>
    );
};

export default Child;