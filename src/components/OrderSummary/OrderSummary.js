import React from 'react';

import Aux from '../../hoc/Aux';

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
			<p>Continue to checkout?</p>
		</Aux>
	);
}

export default orderSummary;