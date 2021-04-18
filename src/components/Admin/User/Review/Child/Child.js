import React, { useContext } from 'react';
import { UserContext } from '../../../../../App';
import './Child.css'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
const backdropUseStyles = makeStyles((theme) => ({ backdrop: { zIndex: theme.zIndex.drawer + 1, color: '#fff' } }));

const Child = () => {
    // -------- BACKDROP --------
    const backdropClasses = backdropUseStyles();
    const [backOpen, setBackOpen] = React.useState(false);
    const backdropClose = () => setBackOpen(false);
    const backdropOpen = () => setBackOpen(!backOpen);

    let review;
    const history = useHistory();
    const [authentication] = useContext(UserContext);
    console.log(authentication);

    const submitHandle = event => {
        event.preventDefault();
        backdropOpen();
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
                backdropClose();
                alert('Review added ->refresh')
            })
            .catch(err => {
                backdropClose();
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
                <span className="vanish"></span>
                <span>Review</span>
                <button onClick={() => history.push('/')} className="btn btn-info home-button">Home</button>
            </section>
            {/* Inner section */}
            <section className="inner-section">
                <div>
                    <form className="d-flex flex-column w-100 justify-content-center align-items-center" onSubmit={submitHandle}>
                        <input onChange={onChange} className="input-review w-75" type="text" placeholder="Enter your review" required />
                        <input type="submit" value="SUBMIT" className="btn btn-info" />
                    </form>
                </div>

            </section>
            {/* BACKDROP */}
            <Backdrop className={backdropClasses.backdrop} open={backOpen}>
                <CircularProgress color="inherit" />
            </Backdrop>
            {/* ----------- */}
        </main>
    );
};

export default Child;