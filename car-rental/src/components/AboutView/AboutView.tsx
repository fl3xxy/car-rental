import { useState } from 'react'
//STYLES
import { AboutViewContainer, AboutViewBox } from "./AboutView.styles"
import { SectionTitle } from "../../GlobalStyles"

//images
import company from '../../assets/company.png'
import located from '../../assets/located.jpg'
import cars from '../../assets/cars-about.jpg'

export const AboutView = () => {

    const [selected, setSelected] = useState('company')
    const toggleView = (choice: string) => {
        setSelected(choice)
    }
  return (
    <AboutViewContainer id='aboutView'>
        <SectionTitle>About</SectionTitle>
        <AboutViewBox>
            <div className="viewbox-left">
                {selected === 'company' && (<img src={company} alt="" />)}
                {selected === 'location' && (<img src={located} alt="" />)}
                {selected === 'cars' && (<img src={cars} alt="" />)}
                
            </div>
            <div className="viewbox-right">
                <div className='buttons'>
                    <button
                    onClick={() => toggleView('company')}
                    className={selected === 'company' ? 'active' : ''}
                    >Company</button>
                    
                    <button
                    onClick={() => toggleView('location')}
                    className={selected === 'location' ? 'active' : ''}>Where we are located</button>
                    
                    <button
                    onClick={() => toggleView('cars')}
                    className={selected === 'cars' ? 'active' : ''}>About our cars</button>
                </div>
                <div className='viewbox-text'>
                    {selected === 'company' && (
                        <p>
                            Content for "Company".<br /><span>Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                            Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                            Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                            Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                            Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</span>
                        </p>
                    )}
                    {selected === 'location' && (
                        <p>
                            Content for "Where we are located".<br /><span>Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                            Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                            Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                            Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                            Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</span>
                        </p>
                    )}
                    {selected === 'cars' && (
                        <p>
                            Content for "About our cars".<br /><span>Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                            Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                            Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                            Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                            Lorem ipsum dolor 
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</span>
                        </p>
                    )}
                </div>
            </div>
        </AboutViewBox>
    </AboutViewContainer>
  )
}
