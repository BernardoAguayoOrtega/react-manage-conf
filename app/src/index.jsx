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
			logo: 'https://img.icons8.com/nolan/64/space-shuttle.png',
			logoAlt: 'logo',
			avatar: 'https://img.icons8.com/officel/80/000000/user-male-circle.png',
			avatarAlt: 'avatar',
			job: 'frontend developer',
			twitter: 'bernardoaguayo',
		}}
	/>,
	root,
);
