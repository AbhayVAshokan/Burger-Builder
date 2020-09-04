import React from 'react';

import styles from './BuildControl.css';

const buildControl = (props) => (
	<div className={styles.buildControl}>
		<div className={styles.label}>{props.label}</div>
		<button
			className={styles.less}
			onClick={props.less}
			disabled={props.disabled}>
			Less
		</button>
		<button
			className={styles.more}
			onClick={props.more}>
			More
		</button>
	</div>
);

export default buildControl;
