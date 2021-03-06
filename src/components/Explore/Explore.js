import React from 'react';
import './Explore.css';
import Header from '../Home/Header/Header'
import Card from '../Home/Apartments/Card';
import { useEffect, useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
const backdropUseStyles = makeStyles((theme) => ({ backdrop: { zIndex: theme.zIndex.drawer + 1, color: '#fff' } }));

const Explore = () => {
    // -------- BACKDROP --------
    const backdropClasses = backdropUseStyles();
    const [backOpen, setBackOpen] = React.useState(true);
    const backdropClose = () => setBackOpen(false);

    const [apartments, setApartments] = useState([]);
    
    useEffect(() => {
        fetch('https://protected-citadel-86567.herokuapp.com/getData?token=root')
            .then(res => res.json())
            .then(data => {
                backdropClose();
                let arr = []
                data.map(list => {
                    list.status = "BookNow"
                    arr.push(list)
                })
                setApartments(arr)
            })
            .catch(err => {
                backdropClose();
                alert(err);
            })
    }, [])

    const bookNow = data => {
        sessionStorage.setItem('area', data.area);
        sessionStorage.setItem('bathrooms', data.bathrooms);
        sessionStorage.setItem('garages', data.garages);
        sessionStorage.setItem('img', data.img);
        sessionStorage.setItem('location', data.location);
        sessionStorage.setItem('name', data.name);
        sessionStorage.setItem('price', data.price);
        sessionStorage.setItem('rooms', data.rooms);
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('contain', true);
        alert("Flat added to booking, navigate to admin panel");
    }

    return (
        <main>
            <Header />
            <div className="App">
                <div className="Explore-header">
                    <h1>Pick your Apartment</h1>
                    <h5 className="available-apartments">{apartments.length} available apartments found</h5>
                    <section>
                        <div className="d-flex justify-content-center align-items-center p-2 flex-wrap">
                            {
                                apartments.map(apartment =>
                                    <Card
                                        data={apartment}
                                        booking={() => bookNow(apartment)}
                                    />
                                )
                            }
                        </div>
                    </section>
                </div>
            </div>

            {/* BACKDROP */}
            <Backdrop className={backdropClasses.backdrop} open={backOpen}>
                <CircularProgress color="inherit" />
            </Backdrop>
            {/* ----------- */}

        </main>
    );
};

export default Explore;