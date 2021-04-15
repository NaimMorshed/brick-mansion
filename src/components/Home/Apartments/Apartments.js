import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import img from '../../../images/random-apartment.jpg';
import Card from './Card';
import { useHistory } from 'react-router';

const randomData = [
    {
        img: img,
        name: 'St. Villa',
        location: 'West Road, Bl',
        price: 470,
        area: 400,
        rooms: 4,
        bathrooms: 3,
        garages: 2
    },
    {
        img: img,
        name: 'South Bridge',
        location: 'West Road, Bl',
        price: 250,
        area: 234,
        rooms: 3,
        bathrooms: 2,
        garages: 1
    },
    {
        img: img,
        name: 'William Street',
        location: 'West Road, Bl',
        price: 300,
        area: 234,
        rooms: 3,
        bathrooms: 2,
        garages: 1
    },
]

const Apartments = () => {
    const history = useHistory();
    return (
        <div className="App apartment-background">
            <div className="mt-5 Featured-header">
                <h1 className="mt-3 pt-5">FEATURED APARTMENTS</h1>

                <div className="d-flex justify-content-center container w-50">
                    <hr className="hr" />
                    <FontAwesomeIcon className="icon-color" icon={faHome} />
                    <hr className="hr" />
                </div>

                {/* CARD */}
                <section>
                    <div className="d-flex justify-content-center align-items-center p-5 flex-wrap">
                        <Card data={randomData[0]} />
                        <Card data={randomData[1]} />
                        <Card data={randomData[2]} />
                    </div>
                </section>

                <div>
                    <button onClick={() => history.push('/explore')} className="btn btn-info w-75 font-weight-bold">
                        EXPLORE
                        <FontAwesomeIcon className="icon-color text-white ml-2" icon={faArrowRight} />
                        </button>
                </div>

            </div>
        </div>
    );
};

export default Apartments;