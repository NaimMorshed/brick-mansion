import React from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import Contacts from './Contacts';
import SendUsMessage from './SendUsMessage';

const ContactUs = () => {
    return (
        <div className="parent-contact">
            <div className="App contact-background custom-padding">
                <div className="mt-5 Featured-header">
                    <h1>CONTACT US</h1>

                    <div className="d-flex justify-content-center container w-50">
                        <hr className="hr" />
                        <FontAwesomeIcon className="icon-color" icon={faHeadset} />
                        <hr className="hr" />
                    </div>

                    {/* Main section */}
                    <section className="row">

                        <div className="col-md-6 col-sm-6">
                            <Contacts />
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <SendUsMessage />
                        </div>

                    </section>


                </div>
            </div>
        </div>
    );
};

export default ContactUs;