import React from 'react';
import logo from '../../../../../images/logo/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faComments, faList } from '@fortawesome/free-solid-svg-icons'

const Sidebar = (props) => {

    const imageDiv = 'text-center img-section';
    const imageParent = 'd-flex justify-content-center flex-column';
    const listParent = 'mt-5';
    const fontAwesome = 'icon-color text-white mr-2 icon-custom';
    const listChild = 'd-flex justify-content-center mt-2 mb-2 list-child'
    const fontAwesomeBlack = 'icon-color text-black mr-2 icon-custom';
    const defaultSelection = 'd-flex justify-content-center mt-2 mb-2 default-selection'

    return (
        <main className="parent-section">
            {/* Image section */}
            <section className={imageParent}>
                <div className={imageDiv}>
                    <img src={logo} alt="logo" />
                </div>
            </section>
            {/* List section */}
            <section className={listParent}>
                <div onClick={() => props.handler(0)} className={listChild}>
                    <FontAwesomeIcon className={fontAwesome} icon={faShoppingCart} />
                    <span>Book</span>
                </div>
                <div onClick={() => props.handler(1)} className={defaultSelection}>
                    <FontAwesomeIcon className={fontAwesomeBlack} icon={faList} />
                    <span>Booking List</span>
                </div>
                <div onClick={() => props.handler(2)} className={listChild}>
                    <FontAwesomeIcon className={fontAwesome} icon={faComments} />
                    <span>Review</span>
                </div>
            </section>
        </main>
    );
};

export default Sidebar;