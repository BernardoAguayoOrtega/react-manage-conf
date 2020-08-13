//import react
import React, { Component } from 'react';

//import styles
import './styles/BadgeForm.css';

//crete class extends from react components
export default class BadgeForm extends Component {
	//constructor
	constructor() {
		super();
		this.state = {
			name: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: '',
		};
	}
	//handle change
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	//handle click
	handleSubmit = (event) => {
		event.preventDefault();
		console.log('button was click');
	};
	//render
	render() {
		return (
			<div className='badge-form-container'>
				<form onSubmit={this.handleSubmit} className='badge-form'>
					<label>Fist Name</label>
					<input
						onChange={this.handleChange}
						type='text'
						name='name'
						value={this.state.name}
					/>
					<label>Last Name</label>
					<input
						onChange={this.handleChange}
						type='text'
						name='lastName'
						value={this.state.lastName}
					/>
					<label>Email</label>
					<input
						onChange={this.handleChange}
						type='email'
						name='email'
						value={this.state.email}
					/>
					<label>Job Title</label>
					<input
						onChange={this.handleChange}
						type='text'
						name='jobTitle'
						value={this.state.jobTitle}
					/>
					<label>Twitter</label>
					<input
						onChange={this.handleChange}
						type='text'
						name='twitter'
						value={this.state.twitter}
					/>
					<button>Save</button>
				</form>
			</div>
		);
	}
}
