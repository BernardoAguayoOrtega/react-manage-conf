//import react
import React, { Component } from 'react';

//import styles
import './styles/Navbar.css';
//class wit default export and extend from react component
export default class Navbar extends Component {
	//render method
	render() {
		return (
			<div className='navbar-container'>
				<a className='navbar' href={this.props.href}>
					<figure>
						<img
							className='logo-img'
							src={this.props.src}
							alt={this.props.alt}
						/>
					</figure>
					<span className='logo-word1'>Conf</span>
					<span className='logo-word2'>2020</span>
				</a>
			</div>
		);
	}
}
