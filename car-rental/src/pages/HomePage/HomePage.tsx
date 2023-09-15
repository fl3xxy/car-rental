import { HomeView } from "../../components/HomeView/HomeView"
import { CarsView } from "../../components/CarsView/CarsView"
import { InfoView } from "../../components/InfoView/InfoView"
import { AboutView } from "../../components/AboutView/AboutView"
import { ContactView } from "../../components/ContactView/ContactView"

const HomePage = () => {
  return (
    <>
      <HomeView />
      <CarsView />
      <InfoView />
      <AboutView />
      <ContactView />
    </>
  )
}

export default HomePage