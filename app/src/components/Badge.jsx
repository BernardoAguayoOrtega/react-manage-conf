//import react
import React, { Component } from 'react';

//import styles
import './styles/Badge.css';

//class extends from react component
export default class Badge extends Component {
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
					<h2>{this.props.badge.text}</h2>
				</header>
				<section className='badge_section-name'>
					<img
						className='badge_avatar'
						src={this.props.badge.avatar}
						alt={this.props.badge.avatarAlt}
					/>
					<h2>
						{this.props.badge.name1} <br /> {this.props.badge.name2}
					</h2>
				</section>
				<section className='badge_section-info'>
					<p>{this.props.badge.job}</p>
					<p>@{this.props.badge.twitter}</p>
				</section>
				<footer className='badge_footer'>
					<span>#conf2020</span>
				</footer>
			</div>
		);
	}
}
