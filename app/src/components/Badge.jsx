//import react
import React, { Component } from 'react';

//import styles
import '../styles/Badge.css';

//class extends from react component
export default class Badge extends Component {
	//constructor
	/**
	 * @description create class and add props
	 * @param {props} props
	 */
	constructor(props) {
		super();
		this.props = props;
	}
	//render method
	/**
	 * @function render
	 * @description a main section with 4 sections inside
	 * the header
	 * avatar
	 * info about
	 * footer
	 */
	render() {
		return (
			<div className='badge'>
				<header className='badge_header'>
					<img src={this.props.props.logo} alt={this.props.props.logoAlt} />
				</header>
				<section className='badge_section-name'>
					<img
						className='badge_avatar'
						src={this.props.props.avatar}
						alt={this.props.props.avatarAlt}
					/>
					<h2>
						Bernardo <br /> Aguayo
					</h2>
				</section>
				<section className='badge_section-info'>
					<p>{this.props.props.job}</p>
					<p>@{this.props.props.twitter}</p>
				</section>
				<footer className='badge_footer'>
					<span>#conf2020</span>
				</footer>
			</div>
		);
	}
}
