import React, { useState } from 'react';
import './Child.css';
import { Dropdown } from 'react-bootstrap';

const Table = ({ data }) => {
    const th3 = 'col-md-3 text-start';
    const th2 = 'col-md-2 text-start';
    const center = 'h-100 d-flex align-items-center custom'

    const [localStatus, setLocalStatus] = useState(data.status);

    const modifyMongoData = props => {
        fetch(`https://protected-citadel-86567.herokuapp.com/update/${data._id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: props})
        })
        .then(res => res.json())
        .then(dat => alert('Updated, refresh to take effect'))
    }

    const clickedOn_Confirmed = () => {
        modifyMongoData("Confirmed");
        setLocalStatus("Confirmed")
    }
    const clickedOn_Pending = () => {
        modifyMongoData("Pending");
        setLocalStatus("Pending")
    }
    const clickedOn_Cancelled = () => {
        modifyMongoData("Cancelled");
        setLocalStatus("Cancelled")
    }

    const pending = (
        <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                Pending
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={clickedOn_Confirmed}>Confirmed</Dropdown.Item>
                <Dropdown.Item onClick={clickedOn_Cancelled}>Cancelled</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
    const confirmed = (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Confirmed
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={clickedOn_Pending}>Pending</Dropdown.Item>
                <Dropdown.Item onClick={clickedOn_Cancelled}>Cancelled</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
    const cancelled = (
        <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                Cancelled
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={clickedOn_Pending}>Pending</Dropdown.Item>
                <Dropdown.Item onClick={clickedOn_Confirmed}>Confirmed</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );


    return (
        <div className="row table-body">
            <div className={th3}><h5 className={center}>{data.displayName}</h5></div>
            <div className={th3}><h5 className={center}>{data.token}</h5></div>
            <div className={th2}><h5 className={center}>{data.name}</h5></div>
            <div className={th2}><h5 className={center}>Credit Card</h5></div>
            {
                localStatus === 'Pending' ? <div className={th2}>{pending}</div> :
                localStatus === 'Confirmed' ? <div className={th2}>{confirmed}</div> :
                <div className={th2}>{cancelled}</div>
            }
        </div>
    );
};

export default Table;