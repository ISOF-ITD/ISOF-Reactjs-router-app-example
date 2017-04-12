// Importerar React components
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, Redirect } from 'react-router'

// Importerar modules som används i vårt application
import Application from './components/Application';
import ExampleModule from './components/ExampleModule';
import ExampleFormModule from './components/ExampleFormModule';

// ReactDOM.render är startpunkten i varje React application. Här definerar vi vårt <Router> object som strukturerar "sidorna" i applicationen
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Application}>

			<Route path="/map(/namn/:label)(/label/:label)(/lat/:lat)(/lng/:lng)" 
				components={{main: ExampleModule}}/>
			<Route path="/form" 
				components={{main: ExampleFormModule}}/>

		</Route>
	</Router>,
	document.getElementById('app')
);