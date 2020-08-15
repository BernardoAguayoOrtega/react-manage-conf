//import react
import React from 'react';

//import styles
import './styles/404.css';

//functional component
export default function NotFound() {
	return (
		<div className='not-found-container'>
			<figure>
				<img
					src='https://storytale.io/wp-content/uploads/2020/04/vesta-13-error-890x668.png'
					alt='Not found page'
				/>
			</figure>
			<h1>
				Error <i className='fas fa-exclamation-triangle'></i>
			</h1>
			<div id='stars'></div>
			<div id='stars2'></div>
		</div>
	);
}
