//import react
import React from 'react';
import ReactDOM from 'react-dom';

//import react router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import pages
import BadgeNew from './pages/BadgeNews';
import Badges from './pages/Badges';

//const root o render the app
const root = document.getElementById('app');

//render method from reactDom
/**
 * @description Render virtual react dom
 */
ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/react-manage-conf/badges' component={Badges} />
			<Route exact path='/react-manage-conf/badges/new' component={BadgeNew} />
		</Switch>
	</BrowserRouter>,
	root,
);
