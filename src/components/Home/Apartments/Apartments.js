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

const randomData = [
    {
        img: img,
        name: 'St. Villa',
        location: 'West Road, Bl',
        price: 470,
        area: 400,
        rooms: 4,
        bathrooms: 3,
        garages: 2
    },
    {
        img: img,
        name: 'South Bridge',
        location: 'West Road, Bl',
        price: 250,
        area: 234,
        rooms: 3,
        bathrooms: 2,
        garages: 1
    },
    {
        img: img,
        name: 'William Street',
        location: 'West Road, Bl',
        price: 300,
        area: 234,
        rooms: 3,
        bathrooms: 2,
        garages: 1
    },
]

const Apartments = () => {
    const history = useHistory();
    const classes = useStyles();
    const [apartments, setApartments] = useState([]);
    const [wait, setWait] = useState(true);
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
                                    <Card data={apartment} />
                                )
                                :
                                <>
                                    <Card data={apartments[0]} />
                                    <Card data={apartments[1]} />
                                    <Card data={apartments[2]} />
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