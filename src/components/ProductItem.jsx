import React, {useState} from 'react';
import '../styles/ProductItem.scss';
import addCard from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {
	const [cart, setCart] = useState('');

	const hanlderClick = () => {
		setCart('Hola Mundo')
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={hanlderClick}>
					<img src={addCard} alt="" />
				</figure>
				{cart}
			</div>
		</div>
	);
}

export default ProductItem;