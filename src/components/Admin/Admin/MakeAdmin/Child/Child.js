import React, { useEffect, useState } from 'react';
import './Child.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Child = () => {
    let email;
    const fontAwesome = 'icon-color custom-ico';

    // Get admin list
    const [adminList, setAdminList] = useState([]);
    useEffect(() => {
        fetch('https://protected-citadel-86567.herokuapp.com/getData?token=admin')
            .then(res => res.json())
            .then(data => {
                setAdminList(data)
            })
            .catch(err => {
                alert(err);
            })
    }, [])

    const submitOperation = event => {
        event.preventDefault();
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
                alert('New admin added ->refresh')
            })
            .catch(err => {
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
            fetch(`https://protected-citadel-86567.herokuapp.com/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    alert('Admin delete ->refresh')
                })
                .catch(err => {
                    alert(err);
                })
        }
    }

    return (
        <main className="order-list-parent">
            {/* Top Bar */}
            <section className="top-bar">
                <span>Make Admin</span>
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
        </main>
    );
};

export default Child;