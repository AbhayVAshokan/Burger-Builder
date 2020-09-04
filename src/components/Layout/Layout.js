import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import styles from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	}

	// Function to toggle SideDrawer
	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer }
		})
	}

	render() {
		return (
			<Aux>
				<Toolbar showSideDrawer={this.sideDrawerToggleHandler}/>
				<SideDrawer
					showSideDrawer={this.state.showSideDrawer}
					sideDrawerToggleHandler={this.sideDrawerToggleHandler}/>
				<main className={styles.content}>
					{this.props.children}
				</main>
			</Aux>
		);
	}
}

export default Layout;
