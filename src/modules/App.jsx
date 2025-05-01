import { Global } from "@emotion/react"
import globalStyles from "../shared/styles/global"
import Theme from "../context/Theme"
import Navigation from "../pages/Navigation"
import PageLayout from "./layouts/PageLayout/PageLayout"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
function App() {

  return (
    <>
      <Theme>
        <Global styles={globalStyles} />
        <PageLayout>
          <Navbar />
          <Navigation />
          <Footer />
        </PageLayout>
      </Theme>
     
    </>
  )
}

export default App
