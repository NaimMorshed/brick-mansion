import React from 'react';
import './ContactUs.css';

const SendUsMessage = () => {
    return (
        <div className="m-4 mt-5 d-flex justify-content-center align-items-center flex-column border p-3 bg-custom">
            <h2>Send us message</h2>
            <br />
            <input className="input-custom" type="text" placeholder="Enter your name"/>
            <input className="input-custom" type="text" placeholder="Enter your email"/>
            <input className="input-custom" type="text" placeholder="Subject"/>
            <input className="input-big" type="text" placeholder="message"/>
            <button className="btn btn-info">SEND</button>
        </div>
    );
};

export default SendUsMessage;