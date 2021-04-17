import React from 'react';
import Sidebar from './SideBar/Sidebar'
import Child from './Child/Child'

const ManageService = (props) => {
    return (
        <div className="row p-0 w-100">
            <div style={{width: '1000px'}} className="col-md-2 p-0">
                <Sidebar handler={props.handler} />
            </div>
            <div className="col-md-10 p-0">
                <Child />
            </div>
        </div>
    );
};

export default ManageService;