import { useState, useEffect } from 'react';
//STYLES
import { CarsViewContainer, CarsViewBox, RentBtn, CarDetailContainer, CarDetailBox, OrderBtn } from "./CarsView.style"
import { SectionTitle } from '../../GlobalStyles';
//images
import bmw from '../../assets/bmwm2.jpg'
import a7 from '../../assets/a7.jpg'
import bmwx6 from '../../assets/bmwx6.jpg'
import volvoxc60 from '../../assets/volvoxc60.jpg'
//icons
import { FaUser, FaDoorClosed, FaClock, FaGrinHearts, FaTimes, FaMapMarked, FaCarSide, FaUndo } from 'react-icons/fa';


interface Car {
    id:number;
    brand:string;
    model:string;
    cost:number;
    type:string;
    passengers:number;
    doors:number;
    gearbox:string;
    year:number;
    max_speed:number;
    image: string;
}

export const CarsView = () => {
    const url  = 'http://127.0.0.1:8000/api/cars/'
    const [cars, setCars] = useState<Car[]>([]); 
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);
    const [scrollDisabled, setScrollDisabled] = useState(false);

    const handleRentClick = (car: Car) => {
      setSelectedCar(car);
      setScrollDisabled(true);
    };

    const handleDetailRentClick = () => {
        setSelectedCar(null);
        alert(`It's only a demo site! :<`);
        setScrollDisabled(false);

    }
    const handleCloseBtn = () => {
        setSelectedCar(null);
        setScrollDisabled(false);
    }
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCars(data))
            .catch(error => console.error('Error:', error));
    }, []);


    useEffect(() => {
      if (scrollDisabled) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [scrollDisabled]);


    const images = [
        bmw,
        a7,
        bmwx6,
        volvoxc60,
    ]
    const carsWithImages = cars.map((car, index) => ({ ...car, image: images[index] }));
    
    
    return (
        <CarsViewContainer id='carsView'>
            <SectionTitle className='car-view-title'>Our Cars</SectionTitle>
            <CarsViewBox>
                {carsWithImages.map(car => (
                    <li key={car.id}>
                        {car.image && <img src={car.image} alt={`${car.brand} ${car.model}`} />}
                        <div className='car-first-section'>
                            <p className='car-brand'><b>{car.brand} {car.model}</b></p>
                            <p className='car-year'>{car.year}</p>
                        </div>
                        <hr />
                        <div className="car-second-section">
                            <div className='c-sec-sect'>
                                <div>
                                    <i><FaUser color="#FFA500"/></i>
                                    <p>{car.passengers} People</p>
                                </div>
                                <div>
                                    <i><FaDoorClosed color="#FFA500"/></i>
                                    <p>{car.doors} Doors</p>
                                </div>
                            </div>
                            <div className='c-sec-sect'>
                                <div>
                                    <i><FaClock color="#FFA500"/></i>
                                    <p>{car.max_speed} km/h</p>
                                </div>
                                <div>
                                    <i><FaGrinHearts color="#FFA500"/></i>
                                    <p>{car.gearbox}</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="car-third-section">
                            <p><span>${car.cost}</span>/month</p>
                            <RentBtn onClick={() => handleRentClick(car)}>Rent now</RentBtn>
                        </div>
                    </li>
                ))}
            </CarsViewBox>
            {selectedCar && (
             <CarDetailContainer>
                 <CarDetailBox>
                    <div className='detail-close'>
                        <i>
                            <FaTimes size="25px" onClick={handleCloseBtn}/>
                        </i>
                    </div>
                    <div className='detail-container'>
                        <div className='display'>
                            <label htmlFor="location">
                                <i><FaMapMarked /></i>
                                <p>Location</p>
                            </label>
                            <input type="text" placeholder='Location'/>
                        </div>
                        <div className="display">
                            <label htmlFor="pick-up-date">
                                <i><FaCarSide /></i>
                                <p>Pick up date</p>
                            </label>
                            <input type="date" />
                        </div>
                        <div className="display">
                            <label htmlFor="return-date">
                                <i><FaUndo size="15px"/></i>
                                <p>Return date</p>
                            </label>
                            <input type="date" />
                        </div>
                    </div>
                    <div className='detail-close'>
                        <OrderBtn onClick={handleDetailRentClick}>Order now</OrderBtn>
                    </div>
                 </CarDetailBox>
             </CarDetailContainer>
        )}
        </CarsViewContainer>
    )
}
