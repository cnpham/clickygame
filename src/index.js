import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

require('assets\amauri-acosta-montiel-1094351-unsplash.jpg');
require('assets\hanjoung-choi-1295013-unsplash.jpg');
require('assets\jcob-nasyr-765785-unsplash.jpg');
require('assets\jeremy-bishop-136676-unsplash.jpg');
require('assets\kris-mikael-krister-556573-unsplash.jpg');
require('assets\luca-ambrosi-418968-unsplash.jpg');
require('assets\robert-baker-534270-unsplash.jpg');
require('assets\sandy-millar-719450-unsplash.jpg');
require('assets\wexor-tmg-26886-unsplash.jpg');


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
