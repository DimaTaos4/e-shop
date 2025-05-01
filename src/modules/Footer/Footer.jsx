/** @jsxImportSource @emotion/react */
import { footerStyle, footerContentStyle } from "./styles"
import Container from '../layouts/Container/Container'
import FooterContacts from "./FooterContacts/FooterContacts"
import FooterSocialLinks from "./FooterSocialLinks/FooterSocialLinks"
const Footer = () => {
    return (
        <div css={footerStyle}>
            <Container>
                <div css={footerContentStyle}>
                    <FooterContacts />
                    <FooterSocialLinks />
                </div>
            </Container>
        </div>
    )
}
export default Footer