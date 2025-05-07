/** @jsxImportSource @emotion/react */
import contactsSocialLinksItems from "./ContactsSolialLinks"
import { messangerContactBlockStyle, titleContactLinksStyle, blockSocialLicksContactStyle } from "./styles"


const ContactsMessanger = () => {
    const elements = contactsSocialLinksItems.map(elem => <a key={elem.href} href={elem.href} target="_blank">{elem.icon}</a>)
    return (
        <div css={messangerContactBlockStyle}>
            <h2 css={titleContactLinksStyle}>Найдите нас:</h2>
            <div css={blockSocialLicksContactStyle}>
                {elements}
            </div>
        </div>
    )
}
export default ContactsMessanger