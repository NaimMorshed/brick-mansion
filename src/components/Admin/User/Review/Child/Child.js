import React, { useContext } from 'react';
import { UserContext } from '../../../../../App';
import './Child.css'

const Child = () => {
    let review;
    const [authentication] = useContext(UserContext);
    console.log(authentication);

    const submitHandle = event => {
        event.preventDefault();

        fetch('https://protected-citadel-86567.herokuapp.com/addData', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify([
                {
                    token: 'review',
                    review: review,
                    photoUrl: authentication.photoUrl,
                    name: authentication.displayName
                }
            ])
        })
            .then(res => res.json())
            .then(data => {
                alert('Review added ->refresh')
            })
            .catch(err => {
                alert(err)
            })
    }

    const onChange = event => {
        review = event.target.value;
    }

    return (
        <main className="order-list-parent">
            {/* Top Bar */}
            <section className="top-bar">
                <span>Review</span>
            </section>
            {/* Inner section */}
            <section className="inner-section">
                <div>
                    <form className="d-flex flex-column w-50" onSubmit={submitHandle}>
                        <input onChange={onChange} className="input-review" type="text" placeholder="Enter your review" required />
                        <input type="submit" value="SUBMIT" className="btn btn-info"/>
                    </form>
                </div>

            </section>
        </main>
    );
};

export default Child;