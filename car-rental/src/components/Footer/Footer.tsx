//styles
import { FooterContainer } from "./Footer.styles"
//icons
import { FaCar } from "react-icons/fa"

export const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  return (
    <FooterContainer>
        <div className="left-footer">
            <i><FaCar color="#FFF" size="25px"/></i>
            <p>RentCar</p>
        </div>
        <div className="middle-footer">
            <a href='#homeView'>Home</a>
            <p>|</p>
            <a href='#carsView'>Cars</a>
            <p>|</p>
            <a href='#aboutView'>About</a>
            <p>|</p>
            <a href='#contactView'>Contact</a>
        </div>
        <div className="right-footer">
            <p>Copyright &copy; {currentYear} Tomasz Mielnicki. All Rights Reserved.</p>
        </div>
    </FooterContainer>
  )
}
