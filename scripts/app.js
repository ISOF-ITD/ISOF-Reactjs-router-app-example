// Importerar React components
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, Redirect } from 'react-router'

// Importerar modules som används i vårt application
import Application from './components/Application';
import ExampleModule from './components/ExampleModule';
import ExampleFormModule from './components/ExampleFormModule';
import ExampleFetchModule from './components/ExampleFetchModule';

// IE 11 backwards compatibility, om dem moderna funktionerna Promise och Fetch inte finns i äldre webbläsare, då skapar vi dom
import 'whatwg-fetch';
import Promise from 'promise-polyfill'; 
if (!window.Promise) {
	window.Promise = Promise;
}

// ReactDOM.render är startpunkten i varje React application. Här definerar vi vårt <Router> object som strukturerar "sidorna" i applicationen
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Application}>

			<Route path="/map(/namn/:label)(/label/:label)(/lat/:lat)(/lng/:lng)" 
				components={{main: ExampleModule}}/>
			<Route path="/form" 
				components={{main: ExampleFormModule}}/>
			<Route path="/fetch(/category/:category)" 
				components={{main: ExampleFetchModule}}/>

		</Route>
	</Router>,
	document.getElementById('app')
);