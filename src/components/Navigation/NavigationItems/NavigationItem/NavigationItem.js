import React from 'react';

import styles from './NavigationItem.css';

const navigationItem = (props) => {
	const navItemClasses = []
	if(props.active)
		navItemClasses.push(styles.active);

	return (
			<li
				className={styles.navigationItem}>
				<a
					className={navItemClasses.join(' ')}
					href={props.href}>
					{props.children}
				</a>
			</li>
	);
}

export default navigationItem;
