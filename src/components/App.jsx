//import react
import React from 'react';

//import react router
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

//import pages
import Home from '../pages/Home';
import BadgeNew from '../pages/BadgeNews';
import Badges from '../pages/Badges';
import NotFound from '../pages/404';

//import components
import Layout from './Layout';

//functional component
export default function App() {
	//render method
	return (
		<HashRouter basename='/'>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/badges' component={Badges} />
					<Route exact path='/badges/new' component={BadgeNew} />
					<Route path='/404' component={NotFound} />
					<Redirect from='*' to='/404' />
				</Switch>
			</Layout>
		</HashRouter>
	);
}
