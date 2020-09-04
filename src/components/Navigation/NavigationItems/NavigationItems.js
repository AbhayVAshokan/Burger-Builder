import React from 'react';

import styles from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
	<ul
		className={styles.navigationItems}>
		<NavigationItem href='/' active={true}>Burger Builder</NavigationItem>
		<NavigationItem href='/'>Checkout</NavigationItem>
	</ul>
);

export default navigationItems;
