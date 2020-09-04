import React from 'react';

import Aux from '../../hoc/Aux';
import Button from '../UI/Button/Button';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map((ingredient) => (
			<li key={ingredient}>
				<span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {props.ingredients[ingredient]}
			</li>
		)
	);


	return (
		<Aux>
			<h3>Your order</h3>
			<p>Your delicious burger with the following ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<strong>Total Price: ${props.totalPrice.toFixed(2)}</strong>
			<p>Continue to checkout?</p>
			<Button
				style='danger'
				onClick={props.cancelOrder}>
				CANCEL
			</Button>
			<Button
				style='success'
				onClick={props.placeOrder}>
				CONTINUE
			</Button>
		</Aux>
	);
}

export default orderSummary;
