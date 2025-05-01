/** @jsxImportSource @emotion/react */
import { NavLink } from "react-router-dom"
import navbarMenuItems from "./navbarMenuItems"
import { navbarMenuStyle, navbarMenuLinkStyle } from "./styles"
import { useTheme } from "@emotion/react"
const NavbarMenu = () => {

    const { colors } = useTheme()
    // console.log(colors);
    // const theme = useTheme()
    // console.log(theme.colors);

    const elements = navbarMenuItems.map(({ href, text }) => (
        <li key={text}><NavLink css={navbarMenuLinkStyle(colors.lightDark)} to={href}>{text}</NavLink></li>
    ))

    return (
        <ul css={navbarMenuStyle} >{elements}</ul>
    )
}
export default NavbarMenu