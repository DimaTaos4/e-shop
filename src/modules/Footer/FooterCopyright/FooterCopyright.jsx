/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react"
import footerCopyRightStyle from "./styles"
const FooterCopyright = () => {
    const { colors } = useTheme()

    return (
        <p css={footerCopyRightStyle(colors.lightDark)}>2024 Сникер-магазин. Все права защищены</p>
    )
}
export default FooterCopyright