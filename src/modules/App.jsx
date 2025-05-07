import { Global } from "@emotion/react"
import globalStyles from "../shared/styles/global"
import Theme from "../context/Theme"
import Navigation from "../pages/Navigation"
import PageLayout from "./layouts/PageLayout/PageLayout"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { useSelector, useDispatch } from "react-redux"
import { selectIsCartExist } from "../redux/cart/cart-selector"
import { useEffect } from "react"
import { createCart, fetchCart } from "../redux/cart/cart-thunk"
function App() {
  const isCartExist = useSelector(selectIsCartExist)
  console.log(isCartExist);

  const dispatch = useDispatch()
  useEffect(() => {
    if (isCartExist) {
dispatch(fetchCart())
    } else {
      dispatch(createCart())
    }
  }, [])
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
