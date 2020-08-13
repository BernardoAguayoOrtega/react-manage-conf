//import react
import React from 'react';

//import styles
import './styles/Hero.css';

//function component
export default function Hero(props) {
	return (
		<div className='hero'>
			<div id='stars'></div>
			<div id='title'>
				<span>{props.up}</span>
				<br />
				<span>{props.down}</span>
			</div>
		</div>
	);
}
