//import react
import React, { Component } from 'react';

//import components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

//import styles
import './styles/BadgeNews.css';

export default class BadgeNew extends Component {
	//constructor
	constructor() {
		super();
		this.state = {
			form: {
				firstName: '',
				lastName: '',
				email: '',
				jobTitle: '',
				twitter: '',
			},
		};
	}
	//handle change
	handleChange = (event) => {
		this.setState({
			form: {
				...this.state.form,
				[event.target.name]: event.target.value,
			},
		});
	};
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
				<div className='badge-new-content'>
					<Badge
						badge={{
							logo: 'https://img.icons8.com/plasticine/100/000000/rocket.png',
							logoAlt: 'launch rocket',
							avatar: 'https://img.icons8.com/dusk/2x/user-male.png',
							avatarAlt: 'user image',
							name1: this.state.form.firstName,
							name2: this.state.form.lastName,
							job: this.state.form.jobTitle,
							twitter: this.state.form.twitter,
						}}
					/>
					<BadgeForm
						onChange={this.handleChange}
						formValues={this.state.form}
					/>
				</div>
				<div id='stars'></div>
				<div id='stars2'></div>
			</div>
		);
	}
}
