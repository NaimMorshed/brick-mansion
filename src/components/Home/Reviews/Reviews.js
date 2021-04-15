import React from 'react';
import './Reviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import img from '../../../images/random-user.jpg';
import Card from './Card';

const infoData = [
    {
        img: img,
        name: 'Jonatthan Mark',
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, totam!",
        star: 5
    },
    {
        img: img,
        name: 'Disco Dancer',
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, totam!",
        star: 5
    },
    {
        img: img,
        name: 'Smith Lorem',
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, totam!",
        star: 5
    }
]

const Reviews = () => {
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
                                infoData.map(data => <Card data={data} />)
                            }
                        </div>
                    </section>
                </main>

            </div>
        </div>
    );
};

export default Reviews;