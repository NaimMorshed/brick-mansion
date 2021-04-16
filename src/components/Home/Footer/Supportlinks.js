import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const Supportlinks = () => {
    return (
        <div className="m-auto">
            <section className="mt-3 mb-3">

                <div className="heading-footer">
                    <span>SUPPORT LINKS</span>
                </div>
                <br />

                <div className="inner-text">
                    <div className="list d-flex">
                        <FontAwesomeIcon className="icon-color text-white mr-3" icon={faAngleDoubleRight} />
                        <span>Home</span>
                    </div>
                    <div className="list d-flex">
                        <FontAwesomeIcon className="icon-color text-white mr-3" icon={faAngleDoubleRight} />
                        <span>Contact us</span>
                    </div>
                    <div className="list d-flex">
                        <FontAwesomeIcon className="icon-color text-white mr-3" icon={faAngleDoubleRight} />
                        <span>About us</span>
                    </div>
                    <div className="list d-flex">
                        <FontAwesomeIcon className="icon-color text-white mr-3" icon={faAngleDoubleRight} />
                        <span>Service agents</span>
                    </div>
                    <div className="list d-flex">
                        <FontAwesomeIcon className="icon-color text-white mr-3" icon={faAngleDoubleRight} />
                        <span>Blog</span>
                    </div>
                    <div className="list d-flex">
                        <FontAwesomeIcon className="icon-color text-white mr-3" icon={faAngleDoubleRight} />
                        <span>Service details</span>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default Supportlinks;