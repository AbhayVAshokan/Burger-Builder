import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './burgerIngredient.css';

class BurgerIngredient extends Component {
	render(
		let ingredient = null;

		switch(this.props.type) {
			case ('bread-bottom'):
				ingredient = <div className={styles.BreadBottom}></div>;
				break;

			case ('bread-top'):
				ingredient = (
					<div className={styles.BreadTop}>
						<div className={styles.Seeds1}></div>
						<div className={styles.Seeds2}></div>
					</div>
				);
				break;

			case ('meat'):
				<div className={styles.Meat}></div>;
				break;

			case ('cheese'):
				<div className={styles.Meat}></div>;
				break;

			case ('salad'):
				<div className={styles.Salad}></div>;
				break;

			case ('bacon'):
				<div className={styles.Bacon}></div>;
				break;
		}

		return ingredient;
	);
}

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default BurgerIngredient;
