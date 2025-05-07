import { productCardStyle, productCardImageStyle, productCardImageWrapperStyle, productCardTitleStyle, productCardPriceNameStyle, productCardPriceStyle, productCardActionStyle, productCartAddToCartIconStyle } from "./styles"
import { AddToCartIcon } from "../icons"

/** @jsxImportSource @emotion/react */
const ProductCard = ({ id, image, title, price, addToCartIcon }) => {
    return (
        <div css={productCardStyle}>
            <div css={productCardImageWrapperStyle}>
                <img css={productCardImageStyle} src={image} alt={title} />
            </div>
            <p css={productCardTitleStyle}>{title}</p>
            <div css={productCardActionStyle}>
                <div>
                    <span css={productCardPriceNameStyle}>Цена:</span>
                    <span css={productCardPriceStyle}>{price}$</span>
                </div>
                <span css={productCartAddToCartIconStyle} onClick={() => addToCartIcon(id)}><AddToCartIcon /></span>
            </div>
        </div>
    )
}
export default ProductCard