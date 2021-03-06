import React, { useState } from 'react';
import './Child.css'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
const backdropUseStyles = makeStyles((theme) => ({ backdrop: { zIndex: theme.zIndex.drawer + 1, color: '#fff' } }));
const axios = require('axios').default;

const Child = () => {
    // -------- BACKDROP --------
    const backdropClasses = backdropUseStyles();
    const [backOpen, setBackOpen] = React.useState(false);
    const backdropClose = () => setBackOpen(false);
    const backdropOpen = () => setBackOpen(!backOpen);

    const col12 = "col-md-12 input-form";
    const col6 = "col-md-6 input-form";
    const button = "btn btn-info submit-btn";
    const history = useHistory();
    const [data, setData] = useState(
        {
            token: 'root',
            img: '',
            location: '',
            price: 0,
            area: 0,
            rooms: 0,
            bathrooms: 0,
            garages: 0,
        }
    );

    const onDataChange = event => {
        event.preventDefault();

        const newData = { ...data };
        newData[event.target.name] = event.target.value;
        setData(newData);
    }

    const submitHandler = event => {
        event.preventDefault();
        backdropOpen();
        fetch('https://protected-citadel-86567.herokuapp.com/addData', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify([data])
        })
            .then(res => res.json())
            .then(data => {
                backdropClose();
                alert('New apartment added (refresh)')
                clearAll();
            })
            .catch(err => {
                backdropClose();
                alert(err)
            })
    }

    const clearAll = () => {
        document.getElementById('img').value = null;
        document.getElementById('name').value = null;
        document.getElementById('location').value = null;
        document.getElementById('price').value = null;
        document.getElementById('area').value = null;
        document.getElementById('rooms').value = null;
        document.getElementById('bathrooms').value = null;
        document.getElementById('garages').value = null;

        setData(
            {
                token: 'root',
                img: '',
                location: '',
                price: 0,
                area: 0,
                rooms: 0,
                bathrooms: 0,
                garages: 0,
            }
        )
    }

    const handleImage = event => {
        const imageData = new FormData();
        imageData.set('key', '2e6b03bfb364d782703bbc4ad0f67996');
        imageData.append('image', event.target.files[0])

        backdropOpen();
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                backdropClose();
                const newData = { ...data };
                newData.img = response.data.data.display_url;
                setData(newData);
            })
            .catch(error => {
                backdropClose();
                alert(error)
            });
    }

    return (
        <main className="order-list-parent">

            {/* Top Bar */}
            <section className="top-bar">
                <span className="vanish"></span>
                <span>Add Apartment</span>
                <button onClick={() => history.push('/')} className="btn btn-info home-button">Home</button>
            </section>
            {/* Inner section */}
            <section className="inner-section">
                <div>
                    <form onSubmit={submitHandler}>

                        <h3>Basic</h3>
                        <div className="row">
                            <div className={col12}>
                                <input onBlur={onDataChange} id="name" type="text" name="name" placeholder="Flat title" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className={col6}>
                                <input onBlur={onDataChange} id="location" type="text" name="location" placeholder="Location" required />
                                <input onBlur={onDataChange} id="price" type="number" name="price" placeholder="Rent" required />
                            </div>
                        </div>

                        <h3>Details</h3>
                        <div className="row">
                            <div className={col6}>
                                <input onBlur={onDataChange} id="area" type="number" name="area" placeholder="Area" required />
                                <input onBlur={onDataChange} id="rooms" type="number" name="rooms" placeholder="Bedrooms" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className={col6}>
                                <input onBlur={onDataChange} id="bathrooms" type="number" name="bathrooms" placeholder="Bathrooms" required />
                                <input onBlur={onDataChange} id="garages" type="number" name="garages" placeholder="Garages" required />
                            </div>
                        </div>

                        <h3>Image</h3>
                        <input onChange={handleImage} id="img" type="file" name="img" required />
                        <br />

                        <input type="submit" value="SUBMIT" class={button} />

                    </form>
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