/** @jsxImportSource @emotion/react */
import { footerSocialLinksListStyle } from "./styles"
import footerSocialLinksItems from "./footerSocialLinksItems"
const FooterSocialLinks = () => {
    const elements = footerSocialLinksItems.map(({ href, icon }) => (<li key={href}> <a href={href} target="_blank">{icon}</a></li>))

    return (
        <ul css={footerSocialLinksListStyle}>
            {elements}
        </ul>
    )
}
export default FooterSocialLinks