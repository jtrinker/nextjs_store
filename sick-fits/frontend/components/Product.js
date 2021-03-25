import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import Link from 'next/link';

const Product = ({ product }) => {
    return (
        <ItemStyles>
            <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
            <Title>
                <Link href={`/product/${product.id}`}>{product.name}</Link>
            </Title>
        </ItemStyles>
    )
};

export default Product;