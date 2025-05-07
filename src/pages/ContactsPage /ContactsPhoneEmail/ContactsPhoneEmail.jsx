/** @jsxImportSource @emotion/react */
import footerContactsItems from "../../../modules/Footer/FooterContacts/FooterContactsItems"
import { contactsStyle, contactsItemStyle } from "./styles"



const ContactsPhoneEmail = () => {
    const elements = footerContactsItems.map(elem => <li css={contactsItemStyle} key={elem.href}><a style={{ textDecoration:'none', color:'#00000080'}} href={elem.href} >{elem.text}</a></li>)
    return (
        <ul css={contactsStyle}>
            {elements}
        </ul>
    )
}
export default ContactsPhoneEmail