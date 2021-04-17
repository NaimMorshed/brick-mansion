import React, { useEffect, useState } from 'react';
import Card from '../../../../Home/Apartments/Card';
import './Child.css'

const Child = () => {

    const [apartments, setApartments] = useState([]);
    useEffect(() => {
        fetch('https://protected-citadel-86567.herokuapp.com/getData?token=root')
            .then(res => res.json())
            .then(data => {
                let arr = []
                data.map(list => {
                    list.status = "Admin"
                    arr.push(list)
                })
                setApartments(arr)
            })
            .catch(err => {
                alert(err);
            })
    }, [])

    const deleteCard = data => {
        const answer = window.confirm("Are you sure you want to delete?");
        if (answer) {
            const id = data._id;
            fetch(`http://localhost:5000/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    alert('Apartment deleted ->refresh')
                })
                .catch(err => {
                    alert(err);
                })
        }
    }

    const editCard = data => {
        alert("Edit option not available")
    }

    return (
        <main className="order-list-parent">
            {/* Top Bar */}
            <section className="top-bar">
                <span>Manage Apartment</span>
            </section>
            {/* Inner section */}
            <section>
                {/* CARD */}
                <section>
                    <div className="d-flex justify-content-center align-items-center p-4 flex-wrap rounded">
                        {
                            <section className="bg-light w-100">
                                <div className="w-100 d-flex justify-content-center mb-3">
                                    <div className="admin-list w-50 shadow-custom">
                                        <h3 className="text-center">Available Apartments: {apartments.length}</h3>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center align-items-center flex-wrap">
                                    {
                                        apartments.map(data =>
                                            <Card
                                                data={data}
                                                delete={() => deleteCard(data)}
                                                edit={() => editCard(data)}
                                            />)
                                    }
                                </div>
                            </section>
                        }
                    </div>
                </section>
            </section>
        </main>
    );
};

export default Child;