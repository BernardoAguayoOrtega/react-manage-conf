//import react
import React, { Component } from 'react';

//import react router
import { HashRouter, Route, Switch } from 'react-router-dom';

//import pages
import BadgeNew from '../pages/BadgeNews';
import Badges from '../pages/Badges';

//functional component
export default class App extends Component {
	//render method
	render() {
		return (
			<HashRouter basename='/'>
				<Switch>
					<Route exact path='/badges' component={Badges} />
					<Route exact path='/badges/new' component={BadgeNew} />
				</Switch>
			</HashRouter>
		);
	}
}
