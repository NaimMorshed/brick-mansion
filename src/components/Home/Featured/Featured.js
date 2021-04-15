import React from 'react';
import './Featured.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Featured = () => {
    return (
        <div className="App featured-background">
            <div className="Featured-header">
                <h1>FEATURED LOCATIONS</h1>

                <div className="d-flex justify-content-center container w-50">
                    <hr className="hr" />
                    <FontAwesomeIcon className="icon-color" icon={faMapMarkerAlt} />
                    <hr className="hr" />
                </div>

                <section className="city-container container">

                    <div className="image1 image-common">
                        <p>Amsterdam</p>
                    </div>
                    <div className="image2 image-common">
                        <p>Berlin</p>
                    </div>
                    <div className="image3 image-common">
                        <p>Hiedelberg</p>
                    </div>
                    <div className="image4 image-common">
                        <p>Rome</p>
                    </div>

                </section>

            </div>
        </div>
    );
};

export default Featured;