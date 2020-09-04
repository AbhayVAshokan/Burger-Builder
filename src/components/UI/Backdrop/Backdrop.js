import React from 'react';

import styles from './Backdrop.css';

const backdrop = (props) => (
	props.show
	? <div
		className={styles.backdrop}
		onClick={props.hideModal}></div>
	: null
);

export default backdrop;
