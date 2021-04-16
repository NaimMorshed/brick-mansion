import React from 'react';
import './Child.css';

const Table = ({ data }) => {
    const th3 = 'col-md-3 text-start';
    const th2 = 'col-md-2 text-start';
    const center = 'h-100 d-flex align-items-center'
    return (
        <div className="row table-body">
            <div className={th3}><h5 className={center}>{data.name}</h5></div>
            <div className={th3}><h5 className={center}>{data.email}</h5></div>
            <div className={th2}><h5 className={center}>{data.apartment}</h5></div>
            <div className={th2}><h5 className={center}>{data.pay}</h5></div>
            <div className={th2}><h5 className={center}>{data.status}</h5></div>
        </div>
    );
};

export default Table;