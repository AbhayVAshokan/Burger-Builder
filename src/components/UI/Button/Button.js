import React from 'react';

import styles from './Button.css';

const button = (props) => {
	const buttonStyles = [styles.button];

	switch(props.style) {
		case ('success'):
			buttonStyles.push(styles.success);
			break;

		case ('danger'):
			buttonStyles.push(styles.danger);
			break;

		default:
			break;
	}


	return (
		<button
			onClick={props.onClick}
			className={buttonStyles.join(' ')}>
			{props.children}
		</button>
	);
}

export default button;
