//import react
import React from 'react';
import ReactDOM from 'react-dom';

//import badge
import Badge from './components/Badge';

//const root o render the app
const root = document.getElementById('app');

//render method from reactDom
/**
 * @description Render virtual react dom
 */
ReactDOM.render(
	<Badge
		props={{
			logo: '',
			logoAlt: 'logo',
			avatar: '',
			avatarAlt: 'avatar',
		}}
	/>,
	root,
);
