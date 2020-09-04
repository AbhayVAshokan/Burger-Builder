import React from 'react';

import styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Meat', type: 'meat' },
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
];

const buildControls = (props) => (
	<div className={styles.buildControls}>
		<p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
		{
			controls.map((control) =>
				<BuildControl
					key={control.label}
					label={control.label}
					disabled={props.disabledInfo[control.type]}
					more={() => props.addIngredientHandler(control.type)}
					less={() => props.removeIngredientHandler(control.type)}
				/>
			)
		}
		<button
			disabled={props.orderDisabled}
			className={styles.orderButton}
			onClick={() => props.checkout(true)}>
			ORDER NOW
		</button>
	</div>
)

export default buildControls;
