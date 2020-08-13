//import react
import React, { Component } from 'react';

//import styles
import './styles/BadgeForm.css';

//crete class extends from react components
export default class BadgeForm extends Component {
	//handle submit
	handleSubmit = (event) => {
		event.preventDefault();
		console.log('button was click');
	};
	//
	render() {
		return (
			<div className='badge-form-container'>
				<form onSubmit={this.handleSubmit} className='badge-form'>
					<label>Fist Name</label>
					<input
						onChange={this.props.onChange}
						type='text'
						name='firstName'
						value={this.props.formValues.firstName}
					/>
					<label>Last Name</label>
					<input
						onChange={this.props.onChange}
						type='text'
						name='lastName'
						value={this.props.formValues.lastName}
					/>
					<label>Email</label>
					<input
						onChange={this.props.onChange}
						type='email'
						name='email'
						value={this.props.formValues.email}
					/>
					<label>Job Title</label>
					<input
						onChange={this.props.onChange}
						type='text'
						name='jobTitle'
						value={this.props.formValues.jobTitle}
					/>
					<label>Twitter</label>
					<input
						onChange={this.props.onChange}
						type='text'
						name='twitter'
						value={this.props.formValues.twitter}
					/>
					<button>Save</button>
				</form>
			</div>
		);
	}
}
