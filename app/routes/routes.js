require('../styles/style.sass')
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from '../App.js';


var routes = (
	<Router>
		<div>
			<Route exact path="/" component={App}/>
    </div>
	</Router>
);

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

render(routes, document.getElementById('app'));
