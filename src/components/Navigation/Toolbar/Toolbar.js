import React from 'react';

import styles from './Toolbar.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
	<header className={styles.toolbar}>
		<DrawerToggle showSideDrawer={props.showSideDrawer}/>
		<div className={styles.logo}>
			<Logo />
		</div>
		<nav>
			<NavigationItems/>
		</nav>
	</header>
);

export default toolbar;
