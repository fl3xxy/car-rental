import { Routes, Route } from "react-router-dom"
import { GlobalStyles } from "./GlobalStyles"
import { ThemeProvider,  } from 'styled-components';

//PAGES
import HomePage from "./pages/HomePage/HomePage"
import Navbar from "./components/Navbar/Navbar"
import { theme } from "./theme"
import { Footer } from "./components/Footer/Footer";
const App = () => {


  return (
    <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    <Footer />
    </ThemeProvider>
    </>
  )
}

export default App
