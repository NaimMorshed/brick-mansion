import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faTh, faBed, faToilet, faWarehouse } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const data = props.data;
    const deleteClick = () => {
        return props.delete();
    }
    const editClick = () => {
        return props.edit();
    }
    const bookNow = () => {
        return props.booking();
    }
    
    return (
        <section className="card-parent">
            <div className="bg-info text-white">

                {/* Image section */}
                <div className="row-7 image-container">
                    <img className="card-img" src={data.img} alt="" />
                    {
                        data.status === 'Pending' ? <span className="status-pending">Pending</span>
                        : data.status === 'Booked' ? <span className="status-booked">Booked</span>
                        : data.status === 'Cancelled' ? <span className="status-cancelled">Cancelled</span>
                        : <></>
                    }
                    <div class="middle">
                        {
                            data.status === 'BookNow' ? <div onClick={bookNow} class="btn btn-danger">BOOK NOW</div>
                            : data.status === 'Admin' ? <><div onClick={editClick} class="btn btn-danger">Edit</div> <div onClick={deleteClick} class="btn btn-danger">Delete</div></>
                            : <></>
                        }
                    </div>
                </div>

                {/* Second Section */}
                <div className="row-md-3 row-sm-3">
                    <div className="row pt-2 pl-3 pr-2">
                        <div className="col-md-8 col-sm-8">
                            <span className="d-flex name">{data.name}</span>
                            <div className="d-flex location-div">
                                <FontAwesomeIcon className="icon-color text-white mr-2" icon={faMapMarkerAlt} />
                                <span>{data.location}</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 flex-display">
                            <span className="price">${data.price}</span>
                        </div>
                    </div>
                </div>

                <hr className="card-hr" />

                {/* Footer Section */}
                <div className="row-md-2 row-sm-2 pr-3 pl-3">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 flex-display">
                            <div className="d-flex">
                                <FontAwesomeIcon className="icon-color text-white mr-2" icon={faTh} />
                                <p>{data.area} sqft</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 flex-display">
                            <div className="d-flex">
                                <FontAwesomeIcon className="icon-color text-white mr-2" icon={faBed} />
                                <p>{data.rooms}</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 flex-display">
                            <div className="d-flex">
                                <FontAwesomeIcon className="icon-color text-white mr-2" icon={faToilet} />
                                <p>{data.bathrooms}</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 flex-display">
                            <div className="d-flex">
                                <FontAwesomeIcon className="icon-color text-white mr-2" icon={faWarehouse} />
                                <p>{data.garages}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---End--- */}

            </div>
        </section>
    );
};

export default Card;