//import react
import React from 'react';

//import styles
import './styles/Loading.css';

//create function component
export default function Loading() {
	return (
		<div className='loading-container'>
			<div className='lds-dual-ring'></div>
		</div>
	);
}
