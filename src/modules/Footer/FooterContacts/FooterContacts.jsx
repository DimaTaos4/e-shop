/** @jsxImportSource @emotion/react */
import footerContactsItems from "./FooterContactsItems"
import { footerContactsTitleStyle, footerContactsItemStyle, footerContactsLinkStyle } from "./styles"
import { useTheme } from "@emotion/react"
import FooterCopyright from "../FooterCopyright/FooterCopyright"
const FooterContacts = () => {

    const { colors } = useTheme()


    const elements = footerContactsItems.map(({ href, text }) => (<li css={footerContactsItemStyle} key={text}><a css={footerContactsLinkStyle(colors.lightDark)} href={href}>{text}</a></li>))

    return (
        <div>
            <p css={footerContactsTitleStyle}>Контакты</p>
            <ul >
                {elements}
                <div>
                    <FooterCopyright />
                </div>

            </ul>
        </div>
    )
}

export default FooterContacts