import React from 'react';
import './Footer.css';
import fb from '../../../images/brand/facebook.png';
import twitter from '../../../images/brand/twitter.png';
import whatsapp from '../../../images/brand/whatsapp.png';
import linkedin from '../../../images/brand/linkedin.png';

const Contactus = () => {
    return (
        <div className="m-auto">
            <section className="mt-3 mb-3">
                <div className="heading-footer">
                    <span>CONTACT US</span>
                </div>
                <br />
                <p className="inner-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla<br /> <br /> incidunt natus quo libero facere architecto sit expedita nesciunt quam, temporibus quia a exercitationem saepe, cum, nostrum dignissimos! Natus, numquam dolorem.</p>
                <div className="social-footer">
                    <img src={fb} alt="fb" />
                    <img src={twitter} alt="twitter" />
                    <img src={whatsapp} alt="whatsapp" />
                    <img src={linkedin} alt="linkedin" />
                </div>
            </section>
        </div>
    );
};

export default Contactus;