//import react
import React from 'react';
import ReactDOM from 'react-dom';

//import pages
import App from '../src/components/App';

//const root o render the app
const root = document.getElementById('app');

//render method from reactDom
/**
 * @description Render virtual react dom
 */
ReactDOM.render(<App />, root);
