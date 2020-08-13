//import react
import React, { Component } from 'react';

//import components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Badge from '../components/Badge';

//import styles
import './styles/BadgeNews.css';

export default class BadgeNew extends Component {
	//render method
	render() {
		return (
			<div>
				<Navbar
					src='https://img.icons8.com/cotton/2x/launch-rocket.png'
					alt='Colorful rocket'
					href='#'
				/>
				<Hero up='Best' down='Conf Ever' />
				<Badge
					badge={{
						logo: 'https://img.icons8.com/cotton/2x/launch-rocket.png',
						logoAlt: 'launch rocket',
						avatar: 'https://img.icons8.com/dusk/2x/user-male.png',
						avatarAlt: 'user image',
						name1: 'Bernardo',
						name2: 'Aguayo',
						job: 'Web Developer',
						twitter: 'bernardoaguayo',
					}}
				/>
				<div id='stars'></div>
			</div>
		);
	}
}
