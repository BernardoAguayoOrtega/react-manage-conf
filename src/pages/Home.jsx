//import from react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import styles
import './styles/Home.css';

//import icons
import astronaut1 from '../icons/astronaut-2.png';
import astronaut2 from '../icons/astronaut-3.png';

//class extends from react component
export default class Home extends Component {
	//render method
	render() {
		return (
			<div className='main-container'>
				<div className='main-info-container'>
					<h2>Print your badges</h2>
					<p>The easiest way to manage your conference</p>
					<Link to='/badges' className='main-button'>
						Start Now
					</Link>
				</div>
				<div className='main-img-container'>
					<figure>
						<img src={astronaut1} alt='astronaut with a flag' />
					</figure>
					<figure>
						<img src={astronaut2} alt='astronaut sit in a planet' />
					</figure>
				</div>
				<div id='stars'></div>
			</div>
		);
	}
}
