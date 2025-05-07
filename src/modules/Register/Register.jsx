import SectionTitle from "../../shared/components/SectionTitle/SectionTitle"
import Container from "../layouts/Container/Container"
import RegisterForm from "./RegisterForm/RegisterForm"
import LoadingError from "../../shared/components/LoadingError/LoadingError"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../shared/api/auth-api"
const Register = () => {
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const submitForm = async payload => {
        const { error } = await registerUser(payload);
        if (error) {
            return setError(error.response.data.message);

        }
        navigate("/login");
        alert('Register successfully')

    }
    return (
        <div>
            <Container>
                <SectionTitle title='Регистрация' />
                <RegisterForm submitForm={submitForm} />
                {error && <LoadingError>{error}</LoadingError>}
            </Container>
        </div>
    )
}
export default Register