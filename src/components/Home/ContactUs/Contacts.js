import React from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope, faMapMarkerAlt, faComments } from '@fortawesome/free-solid-svg-icons'

const Contacts = () => {
    const iconStyle = {
        backgroundColor: 'lightgrey',
        borderRadius: '50%',
    }
    return (
        <div className="m-4 mt-5 border bg-custom p-5">
            <h2>Get In Touch</h2>
            <p><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, quas.</small></p>
            <br />

            <section>
                <div className="row p-3 font-weight-bold">
                    <div className="col-md-1 col-1 text-center">
                        <FontAwesomeIcon style={iconStyle} className="icon-color increase-icon" icon={faMobileAlt} />
                    </div>
                    <div className="col-md-11 col-11 d-flex">
                        <span>+344 567 890 122</span>
                    </div>
                </div>

                <div className="row p-3 font-weight-bold">
                    <div className="col-md-1 col-1">
                        <FontAwesomeIcon style={iconStyle} className="icon-color" icon={faEnvelope} />
                    </div>
                    <div className="col-md-10 col-sm-10 d-flex">
                        <span>brickmansion@gmail.com</span>
                    </div>
                </div>

                <div className="row p-3 font-weight-bold">
                    <div className="col-md-1 col-1">
                        <FontAwesomeIcon style={iconStyle} className="icon-color" icon={faComments} />
                    </div>
                    <div className="col-md-11 col-11 d-flex">
                        <span>fb.com/brickmansion</span>
                    </div>
                </div>

                <div className="row p-3 font-weight-bold">
                    <div className="col-md-1 col-1">
                        <FontAwesomeIcon style={iconStyle} className="icon-color  increase-icon" icon={faMapMarkerAlt} />
                    </div>
                    <div className="col-md-11 col-11 d-flex">
                        <span>43 Strase, Berlink, Germany</span>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contacts;