//import react
import React, { Component } from 'react';

//components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BadgesList from '../components/BadgesList';

//styles
import './styles/Badges.css';

//class extends from react component
export default class Badges extends Component {
	//constructor
	constructor() {
		super();
		//data
		this.state = {
			data: [
				{
					id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
					firstName: 'Freda',
					lastName: 'Grady',
					email: 'Leann_Berge@gmail.com',
					jobTitle: 'Legacy Brand Director',
					twitter: 'FredaGrady22221-7573',
					avatarUrl:
						'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
				},
				{
					id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
					firstName: 'Major',
					lastName: 'Rodriguez',
					email: 'Ilene66@hotmail.com',
					jobTitle: 'Human Research Architect',
					twitter: 'MajorRodriguez61545',
					avatarUrl:
						'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
				},
				{
					id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
					firstName: 'Daphney',
					lastName: 'Torphy',
					email: 'Ron61@hotmail.com',
					jobTitle: 'National Markets Officer',
					twitter: 'DaphneyTorphy96105',
					avatarUrl:
						'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
				},
			],
		};
	}
	//render method
	render() {
		return (
			<div className='badges'>
				<Navbar
					src='https://img.icons8.com/cotton/2x/launch-rocket.png'
					alt='Colorful rocket'
					href='#'
				/>
				<Hero up='Badges' down='List' />
				<div className='badges-list'>
					<BadgesList badges={this.state} />
				</div>
			</div>
		);
	}
}
