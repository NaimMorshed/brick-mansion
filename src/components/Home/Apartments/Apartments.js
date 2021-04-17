import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import img from '../../../images/random-apartment.jpg';
import Card from './Card';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const Apartments = () => {
    const history = useHistory();
    const classes = useStyles();
    const [apartments, setApartments] = useState([]);
    const [wait, setWait] = useState(true);

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

    useEffect(() => {
        fetch('https://protected-citadel-86567.herokuapp.com/getData?token=root')
            .then(res => res.json())
            .then(data => {
                let arr = []
                data.map(list => {
                    list.status = "BookNow"
                    arr.push(list)
                })
                setWait(false)
                setApartments(arr)
            })
            .catch(err => {
                setWait(false)
                alert(err);
            })
    }, [])

    return (
        <div className="App apartment-background">
            <div className="mt-5 Featured-header">
                <h1 className="mt-3 pt-5">FEATURED APARTMENTS</h1>
                <h5 className="z-1">{apartments.length} Found available apartments</h5>

                <div className="d-flex justify-content-center container w-50">
                    <hr className="hr" />
                    <FontAwesomeIcon className="icon-color" icon={faHome} />
                    <hr className="hr" />
                </div>

                {/* CARD */}
                <section>
                    <div className="d-flex justify-content-center align-items-center p-5 flex-wrap">
                        {
                            apartments.length < 3
                                ?
                                apartments.map(apartment =>
                                    <Card
                                        data={apartment}
                                        booking={() => bookNow(apartment)}
                                    />
                                )
                                :
                                <>
                                    <Card data={apartments[0]} booking={() => bookNow(apartments[0])} />
                                    <Card data={apartments[1]} booking={() => bookNow(apartments[1])} />
                                    <Card data={apartments[2]} booking={() => bookNow(apartments[2])} />
                                </>
                        }
                        {
                            wait &&
                            <div className="d-flex justify-content-center align-items-center">
                                <div className={classes.root}>
                                    <CircularProgress color="white" />
                                    <br />
                                    <h3>Loading data...</h3>
                                </div>
                            </div>
                        }
                    </div>
                </section>

                <div>
                    <button onClick={() => history.push('/explore')} className="btn btn-info w-75 font-weight-bold">
                        EXPLORE
                        <FontAwesomeIcon className="icon-color text-white ml-2" icon={faArrowRight} />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Apartments;