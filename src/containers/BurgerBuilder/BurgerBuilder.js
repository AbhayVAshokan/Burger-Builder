import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
}

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			meat: 0,
			salad: 0,
			bacon: 0,
			cheese: 0,
		},
		totalPrice: 4
	}

	// Function to add a new ingredient to the Burger
	addIngredientHandler = (type) => {
		let totalPrice = this.state.totalPrice;
		const ingredients = { ...this.state.ingredients };

		ingredients[type] += 1;
		totalPrice = totalPrice + INGREDIENT_PRICES[type];

		this.setState({
			ingredients: ingredients,
			totalPrice: totalPrice
		})
	}

	// Function to remove an ingredient from the Burger
	removeIngredientHandler = (type) => {
		let totalPrice = this.state.totalPrice;
		const ingredients = { ...this.state.ingredients };

		if(ingredients[type] > 0) {
				ingredients[type] -= 1;
				totalPrice = totalPrice - INGREDIENT_PRICES[type];
		}

		this.setState({
			ingredients: ingredients,
			totalPrice: totalPrice
		})
	}

	render() {
		const disabledInfo = { ...this.state.ingredients };
		for(let key in disabledInfo)
			disabledInfo[key] = disabledInfo[key] === 0;

		return (
			<Aux>
				<Burger
					ingredients={this.state.ingredients}/>
				<BuildControls
					price={this.state.totalPrice}
					disabledInfo={disabledInfo}
					addIngredientHandler={this.addIngredientHandler}
					removeIngredientHandler={this.removeIngredientHandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
