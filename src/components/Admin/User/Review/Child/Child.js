import React from 'react';
import './Child.css'

const Child = () => {
   
    return (
        <main className="order-list-parent">
            {/* Top Bar */}
            <section className="top-bar">
                <span>Review</span>
            </section>
            {/* Inner section */}
            <section className="inner-section">
                <div>
                    <form className="d-flex flex-column w-50">
                        <input className="input-review" type="text" name="" placeholder="Enter your review"/>
                        <input type="button" value="SUBMIT" className="btn btn-info"/>
                    </form>
                </div>

            </section>
        </main>
    );
};

export default Child;