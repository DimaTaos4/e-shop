/** @jsxImportSource @emotion/react */
import { sectionTitleWrapperStyle, sectionTitleHeadingStyle, sectionTitleDividerStyle } from "./styles"
const SectionTitle = ({title}) => {
    return (
        <div css={sectionTitleWrapperStyle}>
            <h2 css={sectionTitleHeadingStyle}> {title}</h2>
            <hr css={sectionTitleDividerStyle} />
        </div>

    )
}
export default SectionTitle