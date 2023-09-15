//STYLES
import { InfoViewBox, InfoViewContainer } from "./InfoView.styles"
import { SectionTitle } from "../../GlobalStyles"

//ICONS
import { FaSearch, FaInfo, FaPaypal, FaCar } from "react-icons/fa"

export const InfoView = () => {
  return (
    <InfoViewContainer id="infoView">
        <SectionTitle>Get started with 4 simple steps</SectionTitle>
        <div className="view-cont">
          <InfoViewBox>
            <div className="icon-box icon-box-f">
              <i><FaSearch size="25px" color="#FFF"/></i>
              <p>Find a car</p>
            </div>
            <div>
              <p className="info-text">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris
                  nisi ut aliquip ex.</p>
            </div>
          </InfoViewBox>
          <InfoViewBox>
            <div className="icon-box icon-box-s">
              <i><FaInfo size="25px" color="#FFF"/></i>
              <p>Read the information</p>
            </div>
            <div>
              <p className="info-text">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris
                    nisi ut aliquip ex.</p>
            </div>
          </InfoViewBox>
          <InfoViewBox>
            <div className="icon-box icon-box-t">
              <i><FaPaypal size="25px" color="#FFF"/></i>
              <p>Make payment</p>
            </div>
            <div>
              <p className="info-text">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris
                    nisi ut aliquip ex.</p>
            </div>
          </InfoViewBox>
          <InfoViewBox>
            <div className="icon-box icon-box-fo">
              <i><FaCar size="25px" color="#FFF"/></i>
              <p>Pick up the car</p>
            </div>
            <div>
              <p className="info-text">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris
                    nisi ut aliquip ex.</p>
            </div>
          </InfoViewBox>
        </div>

    </InfoViewContainer>
  )
}
