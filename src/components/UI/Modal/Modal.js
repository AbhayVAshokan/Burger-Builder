import React, { Component } from 'react';

import styles from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show != this.props.show;
	}

	render() {
		const modalStyle = {
			transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
			opacity: this.props.show ? 1 : 0
	 	}

		return (
			<Aux>
				<Backdrop
					show={this.props.show}
					unFocus={() => this.props.checkoutOrderHandler(false)}/>
				<div
					className={styles.modal}
					style={modalStyle}>
					{this.props.children}
				</div>
			</Aux>
		);
	}
}

export default Modal;
