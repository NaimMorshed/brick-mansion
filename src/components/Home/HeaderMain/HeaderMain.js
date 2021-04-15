import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import carousel1 from '../../../images/carousel/carousel1.jpg';
import carousel2 from '../../../images/carousel/carousel2.jpg';
import carousel3 from '../../../images/carousel/carousel3.jpg';
import './HeaderMain.css';
import rate from '../../../images/whatweare/rate.png';
import rent from '../../../images/whatweare/rent.png';
import pin from '../../../images/whatweare/pin.png';
import { useHistory } from 'react-router';

const HeaderMain = () => {

    const history = useHistory();
    
    return (
        <>
            <Carousel fade>

                {/* First Carousel */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={carousel1}
                        alt="First slide"
                    />

                    <Carousel.Caption className="carousel-info">
                        <h3>Discover Our Apartments</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <hr className="hr-carousel"/>
                        <Button onclick={() => history.push('/explore')} className="font-weight-bold" variant="outline-light">EXPLORE NOW</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Second Carousel */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={carousel2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="carousel-info">
                        <h3>Good Service Is Our Passion</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <hr className="hr-carousel"/>
                        <Button onclick={() => history.push('/explore')} className="font-weight-bold" variant="outline-light">EXPLORE NOW</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Third Carousel */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={carousel3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="carousel-info">
                        <h3>Find Your Desired Home</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <hr className="hr-carousel"/>
                        <Button onclick={() => history.push('/explore')} className="font-weight-bold" variant="outline-light">EXPLORE NOW</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            {/* Stylish div */}
            <div className="d-flex justify-content-center">
                <section className="row container text-center stylish-div">
                    
                    <div className="col-md-4">
                        <img className="decrease-img" src={rent} alt="" />
                        <h4>House Rent</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla.</p>
                    </div>

                    <div className="col-md-4">
                        <img src={rate} alt="" />
                        <h4>High Rating</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla.</p>
                    </div>

                    <div className="col-md-4">
                        <img className="decrease-img" src={pin} alt="" />
                        <h4>Best Locations</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla.</p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HeaderMain;