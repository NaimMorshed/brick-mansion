import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fb from '../../../images/brand/facebook.png';
import twitter from '../../../images/brand/twitter.png';
import whatsapp from '../../../images/brand/whatsapp.png';
import linkedin from '../../../images/brand/linkedin.png';

const Card = ({ data }) => {
    return (
        <section className="agent-container">
            <div className="parent-container">
                <img src={data.img} alt="" />
                <div className="p-3">
                    <span className="agent-name">{data.name}</span>
                </div>
                <div className="social">
                    <img src={fb} alt="fb"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={whatsapp} alt="whatsapp"/>
                    <img src={linkedin} alt="linkedin"/>
                </div>
            </div>
        </section>
    );
};

export default Card;