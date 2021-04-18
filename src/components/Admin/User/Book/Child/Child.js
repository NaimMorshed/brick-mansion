import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../../App';
import Card from '../../../../Home/Apartments/Card';
import credit from '../../../../../images/payment/credit-card.png';
import paypal from '../../../../../images/payment/paypal.png';
import './Child.css'
import StripePayment from '../../../../Payment/StripePayment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faDollarSign, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
const backdropUseStyles = makeStyles((theme) => ({ backdrop: { zIndex: theme.zIndex.drawer + 1, color: '#fff' } }));

const Child = () => {
    // -------- BACKDROP --------
    const backdropClasses = backdropUseStyles();
    const [backOpen, setBackOpen] = React.useState(false);
    const backdropClose = () => setBackOpen(false);
    const backdropOpen = () => setBackOpen(!backOpen);

    const history = useHistory();
    const value = sessionStorage.getItem('contain');
    const [authentication, setAuthentication] = useContext(UserContext);
    const [cardType, setCardType] = useState("credit");
    console.log(authentication.displayName);

    const obj = {
        area: sessionStorage.getItem('area'),
        bathrooms: sessionStorage.getItem('bathrooms'),
        garages: sessionStorage.getItem('garages'),
        img: sessionStorage.getItem('img'),
        location: sessionStorage.getItem('location'),
        name: sessionStorage.getItem('name'),
        price: sessionStorage.getItem('price'),
        rooms: sessionStorage.getItem('rooms'),
        token: authentication.email,
        displayName: authentication.displayName,
        status: 'Pending'
    }

    const creditClick = () => {
        setCardType('credit')
    }
    const paypalClick = () => {
        setCardType('paypal')
    }

    const billingDetails = (
        <>
            <h4>Billing Details</h4>
            <h5>Name: {authentication.displayName}</h5>
            <h5>Email: {authentication.email}</h5>
            <h5>Monthly Rent: ${obj.price}</h5>
        </>
    )
    const radio1 = (
        <div class="form-check w-25">
            <input onClick={creditClick} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
            <label class="form-check-label" for="exampleRadios1">
                <img className="credit" src={credit} alt="" />
                Credit Card
            </label>
        </div>
    )
    const radio2 = (
        <div class="form-check w-25">
            <input onClick={paypalClick} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
            <label class="form-check-label" for="exampleRadios2">
                <img className="paypal" src={paypal} alt="" />
            </label>
        </div>
    )

    const submitOrder = () => {
        if (window.confirm('Do you confirm?')) {
            backdropOpen();
            fetch('https://protected-citadel-86567.herokuapp.com/addBookings', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify([obj])
            })
                .then(res => res.json())
                .then(data => {
                    backdropClose();
                    alert('Added to Booking List (refresh)')
                    sessionStorage.clear();
                    localStorage.clear();
                })
                .catch(err => {
                    backdropClose();
                    alert(err)
                })
        }
    }

    const clearButton = () => {
        sessionStorage.clear();
        localStorage.clear();
        alert('Refresh to take effect')
    }

    return (
        <main className="order-list-parent">
            {/* Top Bar */}
            <section className="top-bar">
                <span className="vanish"></span>
                <span>Book</span>
                <button onClick={() => history.push('/')} className="btn btn-info home-button">Home</button>
            </section>
            {/* Inner section */}
            <section className="inner-section">
                <div>
                    {
                        value ?
                            <section className="d-flex justify-content-center align-items-center">
                                <div className="card-booking">
                                    <Card data={obj} />
                                </div>

                                <div className="info-booking w-100">
                                    {billingDetails}
                                    <br />
                                    <h4>Payment Method</h4>
                                    <div className="d-flex">
                                        {radio1}
                                        {radio2}
                                    </div>
                                    <div className="credit-card-div">
                                        {
                                            cardType === 'credit' ? <StripePayment /> : <h5 className="text-danger mt-4">Currently paypal is not supported</h5>
                                        }
                                    </div>
                                    <div className="d-flex justify-content-center w-50">
                                        <button onClick={submitOrder} className="btn btn-info pl-5 pr-5 m-2">
                                            <FontAwesomeIcon className="icon-color text-white" icon={faDollarSign} />
                                            &nbsp;PAY
                                        </button>
                                        <button onClick={clearButton} className="btn btn-secondary pl-5 pr-5 m-2">
                                            <FontAwesomeIcon className="icon-color text-white" icon={faWindowClose} />
                                            &nbsp;Clear
                                        </button>
                                    </div>
                                </div>
                            </section>

                            :
                            <div>
                                <h5 className="text-center text-danger">Explore Apartments from booking section and hit 'BookNow' on the desired apartment card, and then come back here to proceed payment.</h5>
                                <div className="d-flex justify-content-center">
                                    <button onClick={() => history.push('/explore')} className="btn btn-info pr-5 pl-5 pt-3 pb-3">
                                        <FontAwesomeIcon className="icon-color text-white" icon={faShoppingBag} />
                                        &nbsp;EXPLORE
                                    </button>
                                </div>
                            </div>
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