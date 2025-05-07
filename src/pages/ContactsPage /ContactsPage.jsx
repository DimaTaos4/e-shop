/** @jsxImportSource @emotion/react */
import Container from "../../modules/layouts/Container/Container";
import ContactsPhoneEmail from "./ContactsPhoneEmail/ContactsPhoneEmail";
import { titleStyle, borderBottomStyle,formMessangerStyle } from "./styles";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsMessanger from "./ContactsMessanger/ContactsMessanger";


const ContactsPage = () => {

    return (
        <main>
            <Container>
                <div css={titleStyle}>
                    <h2>Контакты</h2>
                    <hr css={borderBottomStyle} />

                </div>
                <ContactsPhoneEmail />
                <div css={formMessangerStyle}>
                    <ContactsForm />
                    <ContactsMessanger />
                </div>
            </Container>

        </main>

    )
}
export default ContactsPage;