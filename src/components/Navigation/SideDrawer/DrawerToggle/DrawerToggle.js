import React from 'react';

import styles from './DrawerToggle.css';

const drawerToggle = (props) => (
	<div
		className={styles.drawerToggle}
		onClick={props.showSideDrawer}>
		<div></div>
		<div></div>
		<div></div>
	</div>
);

export default drawerToggle;
