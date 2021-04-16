import React, { useState } from 'react';
import AddService from './AddService/AddService';
import OrderList from './OrderList/OrderList';
import ManageService from './ManageService/ManageService';
import MakeAdmin from './MakeAdmin/MakeAdmin';

const Admin = () => {

    const [panel, setPanel] = useState(0);

    const handler = props => {
        setPanel(props);
    }

    return (
        <div className="row p-0">
            {
                panel === 0 
                ? <OrderList handler={handler} />
                : panel === 1 ? <AddService handler={handler} />
                : panel === 2 ? <MakeAdmin handler={handler} />
                : <ManageService handler={handler} />
            }
        </div>
    );
};

export default Admin;