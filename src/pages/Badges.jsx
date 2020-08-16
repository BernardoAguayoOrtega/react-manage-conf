//import react
import React, { Component } from 'react';

//components
import Hero from '../components/Hero';
import BadgesList from '../components/BadgesList';
import Loading from './Loading';
import Error from './Error';

//styles
import './styles/Badges.css';

//class extends from react component
export default class Badges extends Component {
	//constructor
	constructor(props) {
		super(props);
		//data
		this.state = {
			loading: true,
			error: null,
			data: undefined,
		};
	}

	//component DidMount
	componentDidMount() {
		this.fetchData();
	}

	//fetch data function
	async fetchData() {
		this.setState({
			loading: true,
			error: null,
		});

		try {
			const data = await fetch('https://rickandmortyapi.com/api/character/')
				.then((response) => response.json())
				.then((data) => data.results);

			this.setState({
				loading: false,
				data: data,
			});
		} catch (error) {
			this.setState({
				loading: false,
				error: error,
			});
		}
	}

	//render method
	render() {
		if (this.state.loading) {
			return <Loading />;
		}

		if (this.state.error) {
			return <Error error={this.state.error} />;
		}

		return (
			<div className='badges'>
				<Hero up='Badges' down='List' />
				<div className='badges-list'>
					<BadgesList badges={this.state} />
				</div>
				<div id='starts'></div>
			</div>
		);
	}
}
