//import react
import React from 'react';

//import styles
import './styles/Errors.css';

//functional component
export default function Error(props) {
	return (
		<div className='error-container'>
			<h1>{`Error: ${this.props.error}`}</h1>
		</div>
	);
}
