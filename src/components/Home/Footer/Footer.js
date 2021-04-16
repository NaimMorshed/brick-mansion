import React from 'react';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import './Footer.css';
import Quicklinks from './Quicklinks';
import Supportlinks from './Supportlinks';

const Footer = () => {
    return (
        <main className="footer-background">
            <section className="p-5 container">

                <div className="row">

                    <div className="col-md-3 col-sm-3"><Aboutus /> </div>
                    <div className="col-md-3 col-sm-3"> <Supportlinks /> </div>
                    <div className="col-md-3 col-sm-3"> <Quicklinks /> </div>
                    <div className="col-md-3 col-sm-3"> <Contactus /> </div>

                </div>

            </section>
        </main>
    );
};

export default Footer;