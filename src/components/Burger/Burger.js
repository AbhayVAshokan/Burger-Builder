import React from 'react';

import styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
	let ingredients = []

	Object.keys(props.ingredients).forEach((ingKey) => {
		ingredients = [
			...ingredients,
			...Array(props.ingredients[ingKey])
				.fill(0)
				.map((_, ingCount) => (
					<BurgerIngredient
						key={`${ingKey}_${ingCount}`}
						type={ingKey}
					/>
				)
		)]
	});

	return (
		<div className={styles.Burger}>
			<BurgerIngredient type='bread-top'/>
			{
				ingredients.length > 0
				? ingredients
				// ? ingredients.sort(() => 0.5 - Math.random() )
				: <p>Please start adding ingredients</p>
			}
			<BurgerIngredient type='bread-bottom'/>
		</div>
	);
}

export default burger;
