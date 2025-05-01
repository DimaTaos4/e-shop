import { css } from "@emotion/react";
import resetStyles from "./reset";
import fontsStyle from "./fonts";
import commonStyle from "./common";
const globalStyles = css`
    ${fontsStyle}
    ${resetStyles}
    ${commonStyle}
`
export default globalStyles