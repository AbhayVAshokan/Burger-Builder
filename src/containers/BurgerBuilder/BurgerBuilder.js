import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
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
		totalPrice: 4,
		checkout: false,
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

	// Function to checkout order: Show Modal
	checkoutOrderHandler = (checkout) => {
		this.setState({
			checkout: checkout
		})
	}

	// Funtion to place order
	placeOrder = () => {
		alert('Order Placed!');
		this.setState({
			ingredients: {
			meat: 0,
			salad: 0,
			bacon: 0,
			cheese: 0,
			},
			totalPrice: 4,
			checkout: false,
		});
	}

	render() {
		const disabledInfo = { ...this.state.ingredients };
		for(let key in disabledInfo)
			disabledInfo[key] = disabledInfo[key] === 0;

		return (
			<Aux>
				<Modal
					className='modal'
					show={this.state.checkout}
					checkoutOrderHandler={this.checkoutOrderHandler}>
					<OrderSummary
						totalPrice={this.state.totalPrice}
						ingredients={this.state.ingredients}
						cancelOrder={() => this.checkoutOrderHandler(false)}
						placeOrder={this.placeOrder}/>
				</Modal>
				<Burger
					ingredients={this.state.ingredients}/>
				<BuildControls
					price={this.state.totalPrice}
					disabledInfo={disabledInfo}
					checkout={this.checkoutOrderHandler}
					orderDisabled={!Object.values(disabledInfo).includes(false)}
					addIngredientHandler={this.addIngredientHandler}
					removeIngredientHandler={this.removeIngredientHandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
