//import react
import React from 'react';

//import react router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import pages
import BadgeNew from '../pages/BadgeNews';
import Badges from '../pages/Badges';

//functional component
export default function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/badges' component={Badges} />
				<Route exact path='/badges/new' component={BadgeNew} />
			</Switch>
		</BrowserRouter>
	);
}
