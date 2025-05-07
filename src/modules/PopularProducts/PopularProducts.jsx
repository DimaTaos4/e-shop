/** @jsxImportSource @emotion/react */
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle"
import ProductCard from "../../shared/components/ProductCard/ProductCard"
import Container from "../layouts/Container/Container"
import { getPopularProducts } from "../../shared/api/products-api"
import { productListStyle, popularProductStyle } from "./styles"
import Loader from "../../shared/components/Loader/Loader"
import LoadingError from "../../shared/components/LoadingError/LoadingError"
import useFetch from "../../shared/hooks/useFetch"
const PopularProducts = () => {
    const { data: products, loading, error } = useFetch({ request: getPopularProducts, initialData: [] })
    const elements = products.map(item => <ProductCard key={item.id} {...item} />)

    return (
        <div css={popularProductStyle}>

            <Container>
                <SectionTitle title='Товары' />
                {<Loader loading={loading} />}
                {error && <LoadingError css>{error}</LoadingError>}
                {Boolean(products.length) && < div css={productListStyle}>{elements}</div>}
            </Container >
        </div >
    )
}
export default PopularProducts