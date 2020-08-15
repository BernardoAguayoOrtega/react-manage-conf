//import from react
import React from 'react';

//import component
import Navbar from './Navbar';

//functional component
export default function Layout(props) {
	return (
		<React.Fragment>
			<Navbar
				src='https://img.icons8.com/cotton/2x/launch-rocket.png'
				alt='Colorful rocket'
				to='/'
			/>
			{props.children}
		</React.Fragment>
	);
}
