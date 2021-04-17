import React, { useState } from 'react';
import Book from './Book/Book';
import BookingList from './BookingList/BookingList';
import Review from './Review/Review';

const User = () => {
    const [panel, setPanel] = useState(0);
    const handler = props => {
        setPanel(props);
    }
    return (
        <div className="row p-0">
            {
                panel === 0 
                ? <Book handler={handler} />
                : panel === 1 ? <BookingList handler={handler} />
                : <Review handler={handler} />
            }
        </div>
    );
};

export default User;