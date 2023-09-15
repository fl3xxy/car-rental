import { useRef, useState, useEffect } from "react"


//ICONS
import { FaCar, FaBars } from "react-icons/fa"
//STYLES
import { NavbarContainer } from './Navbar.styles'
const Navbar = () => {
  const showNav = useRef<HTMLDivElement | null>(null);
	const [isResponsiveNavOpen, setResponsiveNavOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

  const showNavbar = () => {
    showNav.current?.classList.toggle('active');
		setResponsiveNavOpen((prevState) => !prevState);
  }
  
  useEffect(() => {
    if (isResponsiveNavOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }
  }, [isResponsiveNavOpen]);
  
  useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 150) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
	window.addEventListener('scroll', handleScroll)
	return () => {
		window.removeEventListener('scroll', handleScroll);
	};
	});
  return (
    <>
    <NavbarContainer className={`${scrolled ? 'scrolled' : ''}`}>
        <div className="leftSection">
          <i><FaCar color="#000" size="25px"/></i>
          <p className="logo">RentCar</p>
        </div>
        <div className="rightSection" ref={showNav}>
            <a href='#homeView'>Home</a>
            <a href='#carsView'>Cars</a>
            <a href='#aboutView'>About</a>
            <a href='#contactView'>Contact</a>
        </div>
        <div className="toogleBtn" onClick={showNavbar}>
          <i><FaBars/></i>
        </div>
    </NavbarContainer>
    </>
  )
}

export default Navbar