//import react
import React, { Component } from 'react';

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
			<div>
				<header>
					<img src={this.props.props.avatar} alt={this.props.props.logoAlt} />
				</header>
				<section>
					<img src={this.props.props.avatar} alt={this.props.props.avatarAlt} />
					<h2>
						Bernardo <br /> Aguayo
					</h2>
				</section>
				<section>
					<p>Frontend Engineer</p>
					<p>@bernardoaguayo</p>
				</section>
				<footer>
					<span>#conf2020</span>
				</footer>
			</div>
		);
	}
}
