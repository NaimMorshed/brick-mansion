import React, { useEffect, useState } from 'react';
import './Child.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
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

    let email;
    const history = useHistory();
    const fontAwesome = 'icon-color custom-ico';

    // Get admin list
    const [adminList, setAdminList] = useState([]);
    useEffect(() => {
        backdropOpen();
        fetch('https://protected-citadel-86567.herokuapp.com/getData?token=admin')
            .then(res => res.json())
            .then(data => {
                backdropClose();
                setAdminList(data)
            })
            .catch(err => {
                backdropClose();
                alert(err);
            })
    }, [])

    const submitOperation = event => {
        event.preventDefault();
        backdropOpen();
        fetch('https://protected-citadel-86567.herokuapp.com/addData', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify([
                {
                    token: 'admin',
                    email: email
                }
            ])
        })
            .then(res => res.json())
            .then(data => {
                backdropClose();
                alert('New admin added (refresh)')
            })
            .catch(err => {
                backdropClose();
                alert(err)
            })
    }
    const onChange = event => {
        email = event.target.value;
    }
    const deleteAdmin = (props) => {
        const answer = window.confirm("Are you sure you want to delete?");
        if (answer) {
            const id = props._id;
            backdropOpen();
            fetch(`https://protected-citadel-86567.herokuapp.com/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    backdropClose();
                    alert('Admin delete (refresh)')
                })
                .catch(err => {
                    backdropClose();
                    alert(err);
                })
        }
    }

    return (
        <main className="order-list-parent">
            {/* Top Bar */}
            <section className="top-bar">
                <span className="vanish"></span>
                <span>Make Admin</span>
                <button onClick={() => history.push('/')} className="btn btn-info home-button">Home</button>
            </section>
            {/* Inner section */}
            <section className="inner-section">
                <div>
                    <form onSubmit={submitOperation}>
                        <div className="input-form">
                            <input onChange={onChange} className="w-50" type="email" name="" placeholder="Enter email address" required />
                        </div>
                        <input type="submit" value="SUBMIT" className="btn btn-info" />
                    </form>

                    {/* Admin List */}
                    <section>
                        <div className="admin-list">
                            <h3>Admin List</h3>
                        </div>
                        <div className="mt-4">
                            {
                                adminList.map(data =>
                                    <div className="d-flex justify-content-between admin-child">
                                        <li>{data.email}</li>
                                        <FontAwesomeIcon onClick={() => deleteAdmin(data)} className={fontAwesome} icon={faTrashAlt} />
                                    </div>)
                            }
                        </div>
                    </section>
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