import React from 'react';
import './Agents.css';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import image1 from '../../../images/agents/user1.jpg';
import image2 from '../../../images/agents/user2.jpg';
import image3 from '../../../images/agents/user3.jpg';

const infoData = [
    {
        img: image1,
        name: 'SAMUEL'
    },
    {
        img: image2,
        name: 'WALKER'
    },
    {
        img: image3,
        name: 'SMITH'
    }
]

const Agents = () => {
    return (
        <div className="App agent-background">
            <div className="Featured-header">
                <h1>OUR AGENTS</h1>

                <div className="d-flex justify-content-center container w-50">
                    <hr className="hr" />
                    <FontAwesomeIcon className="icon-color" icon={faBriefcase} />
                    <hr className="hr" />
                </div>

                {/* Main section */}
                <main className="agent-container pt-5 pb-5">
                    <section className="container">
                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                            {
                                infoData.map(data => <Card data={data} />)
                            }
                        </div>
                    </section>
                </main>

            </div>
        </div>
    );
};

export default Agents;