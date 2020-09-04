import React from 'react';

import styles from './Logo.css';
import burgerLogo from '../../../assets/images/burger-logo.png';

const logo = (props) => (
	<div  className={styles.logo}>
		<img src={burgerLogo} alt='logo'/>
	</div>
);

export default logo;
