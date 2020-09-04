import React from 'react';

import styles from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
	const modalStyle = {
		transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
		opacity: props.show ? 1 : 0
 	}

	return (
		<Aux>
			<Backdrop
				show={props.show}
				hideModal={() => props.checkoutOrderHandler(false)}/>
			<div
				className={styles.modal}
				style={modalStyle}>
				{props.children}
			</div>
		</Aux>
	);
}

export default modal;
