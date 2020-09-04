import React from 'react';

import Aux from '../../../hoc/Aux';
import styles from './SideDrawer.css';
import Logo from '../../UI/Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
	const sideDrawerStyles = [styles.sideDrawer];
	if(props.showSideDrawer)
		sideDrawerStyles.push(styles.open)
	else
		sideDrawerStyles.push(styles.close)

	return (
		<Aux>
			<Backdrop
				show={props.showSideDrawer}
				unFocus={props.sideDrawerToggleHandler}/>
			<div className={sideDrawerStyles.join(' ')}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
}

export default sideDrawer;
