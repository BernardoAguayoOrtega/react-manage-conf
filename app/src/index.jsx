//import react
import React from 'react';
import ReactDOM from 'react-dom';

//import badge
import BadgeNew from './pages/BadgeNews';

//const root o render the app
const root = document.getElementById('app');

//render method from reactDom
/**
 * @description Render virtual react dom
 */
ReactDOM.render(<BadgeNew />, root);
