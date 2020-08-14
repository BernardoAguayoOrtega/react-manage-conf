//import react
import React, { Component } from 'react';

//import styles
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';

//create class extends to react component
export default class BadgesList extends Component {
	//render
	render() {
		return (
			<div className='list-container'>
				<div className='button-container'>
					<Link to='/badges/new' className='button'>
						Add
					</Link>
				</div>
				<ul className='list'>
					{this.props.badges.data.map((value) => {
						return (
							<li key={value.id}>
								<figure>
									<img src={value.avatarUrl} alt='  avatar' />
								</figure>
								<div className='list-info'>
									<h3>{`${value.firstName} ${value.lastName}`}</h3>
									<i className='fab fa-twitter'>
										<span>{` @${value.twitter}`}</span>
									</i>
									<p>{value.jobTitle}</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
