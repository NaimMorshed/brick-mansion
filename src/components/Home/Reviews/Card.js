import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Card = ({ data }) => {
    return (
        <section className="review-card">
            <div>
                <div className="image-div">  
                    <img src={data.photoUrl} alt="" />
                </div>
                <h2>{data.name}</h2>
                <p>{data.review}</p>
                <div>
                    <FontAwesomeIcon style={{color: 'orange'}} className="icon-color" icon={faStar} />
                    <FontAwesomeIcon style={{color: 'orange'}} className="icon-color" icon={faStar} />
                    <FontAwesomeIcon style={{color: 'orange'}} className="icon-color" icon={faStar} />
                    <FontAwesomeIcon style={{color: 'orange'}} className="icon-color" icon={faStar} />
                    <FontAwesomeIcon style={{color: 'orange'}} className="icon-color" icon={faStar} />
                </div>
            </div>
        </section>
    );
};

export default Card;