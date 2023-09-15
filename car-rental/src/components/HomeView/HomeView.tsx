//STLYES
import { HomeViewContainer } from "./HomeView.styles"

//IMAGES
import cars from '../../assets/cars.png'
import google from '../../assets/google.png'
import apple from '../../assets/app-store.png'

export const HomeView = () => {

    const handleSubmitClick = () => {
        alert(`It's only a demo site! :<`);
      }

  return (
    <HomeViewContainer id="homeView">
        <img src={cars} className="cars"/>
        <div className="homeViewBox">
            <div className="homeViewLeft">
                <h1><span>Looking</span> to rent a car </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
                <div className="appImg">
                    <img src={google} className="google"/>
                    <img src={apple} className="apple"/>
                </div>
            </div>
            <div className="homeViewRight">
                <p className="rent-car-text">Rent a car now!</p>
                <form className="homeRightBox">
                    <div className="input-box">
                        <span>Location</span>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="input-box">
                        <span>Pick-Up Date</span>
                        <input type="date" name="" id="" />
                    </div>
                    <div className="input-box">
                        <span>Return Date</span>
                        <input type="date" name="" id="" />
                    </div>
                    <button className="submitBtn" onClick={handleSubmitClick}>Submit</button>
                </form>
                <a href="#carsView" className="view-all">view all</a>
            </div>
        </div>
    </HomeViewContainer>
  )
}
