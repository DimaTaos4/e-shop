/** @jsxImportSource @emotion/react */
import { btnStyle } from "./styles"
const Button = ({ children, type = "submit", ...props }) => {
    return <div> <button type={type} {...props} css={btnStyle}>{children}</button> </div>

}
export default Button