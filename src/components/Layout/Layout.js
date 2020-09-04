import React from 'react';

import Aux from '../../hoc/Aux';
import styles from './Layout.css';

const layout = (props) => {
	return (
			<Aux>
				<div>Toolbar, Sidebar</div>
				<main className={styles.content}>
					{props.children}
				</main>
			</Aux>
		);
}

export default layout;
