//STYLES
import { ContactViewBox, ContactViewContainer } from "./ContactView.styles"
import { SectionTitle } from "../../GlobalStyles"
//ICONS
import { FaUser, FaEnvelope, FaPen } from "react-icons/fa"

export const ContactView = () => {
  return (
    <ContactViewContainer id="contactView">
        <SectionTitle>Contact</SectionTitle>
        <ContactViewBox>
            <div>
                <label htmlFor="name">
                    <i><FaUser /></i>
                    <p>Name:</p>
                </label>
                <input type="text" name="name" id="name" placeholder="Enter your name"/>
            </div>
            <hr />
            <div>
                <label htmlFor="email">
                    <i><FaEnvelope /></i>
                    <p>Email:</p>
                </label>
                <input type="email" name="email" id="email" placeholder="Enter your email"/>
            </div>
            <hr />
            <div>
                <label htmlFor="description">
                    <i><FaPen /></i>
                    <p>Description:</p>
                </label>
                <input type="text" name="description" id="description" placeholder="Description"/>
            </div>
        </ContactViewBox>
    </ContactViewContainer>
  )
}
