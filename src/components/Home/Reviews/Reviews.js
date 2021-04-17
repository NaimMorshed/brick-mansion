import React, { useEffect, useState } from 'react';
import './Reviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import img from '../../../images/random-user.jpg';
import Card from './Card';
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

const infoData = [
    {
        photoUrl: img,
        name: 'Jonatthan Mark',
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, totam!",
        star: 5
    },
    {
        photoUrl: img,
        name: 'Disco Dancer',
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, totam!",
        star: 5
    },
    {
        photoUrl: img,
        name: 'Smith Lorem',
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, totam!",
        star: 5
    }
]

const Reviews = () => {
    const classes = useStyles();
    const [reviews, setReviews] = useState([]);
    const [wait, setWait] = useState(true);
    useEffect(() => {
        fetch('https://protected-citadel-86567.herokuapp.com/getData?token=review')
            .then(res => res.json())
            .then(data => {
                setWait(false)
                setReviews(data)
            })
            .catch(err => {
                setWait(false)
                alert(err);
            })
    }, [])

    return (
        <div className="App review-background">
            <div className="mt-5 Featured-header">
                <h1>REVIEWS</h1>

                <div className="d-flex justify-content-center container w-50">
                    <hr className="hr" />
                    <FontAwesomeIcon className="icon-color" icon={faComments} />
                    <hr className="hr" />
                </div>

                {/* Main section */}
                <main className="review-container pt-5 pb-5">
                    <section className="container">
                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                            {
                                reviews.map(data => <Card data={data} />)
                            }
                        </div>
                        {
                            wait &&
                            <div className="d-flex justify-content-center align-items-center">
                                <div className={classes.root}>
                                    <CircularProgress color="white" />
                                    <br/>
                                    <h3>Loading data...</h3>
                                </div>
                            </div>
                        }
                    </section>
                </main>

            </div>
        </div>
    );
};

export default Reviews;