import { Routes, Route } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import CartPage from "./CartPage /CartPage";
import ContactsPage from "./ContactsPage /ContactsPage";
import RegisterPage from "./RegisterPage/RegisterPage";
const Navigation = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/register' element={<RegisterPage />} />
        </Routes>
    )
}
export default Navigation