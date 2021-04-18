import React, { useState } from 'react';
import AddService from './AddService/AddService';
import OrderList from './OrderList/OrderList';
import Book from '../Admin/Book/Book';
import ManageService from './ManageService/ManageService';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import BookingList from './BookingList/BookingList';

const Admin = () => {

    const [panel, setPanel] = useState(0);

    const handler = props => {
        setPanel(props);
    }

    return (
        <div className="row p-0">
            {
                  panel === 0 ? <Book handler={handler} />
                : panel === 1 ? <OrderList handler={handler} />
                : panel === 2 ? <BookingList handler={handler} />
                : panel === 3 ? <AddService handler={handler} />
                : panel === 4 ? <MakeAdmin handler={handler} />
                : <ManageService handler={handler} />
            }
        </div>
    );
};

export default Admin;