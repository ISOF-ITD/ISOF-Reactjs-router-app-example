import React from 'react';
import { hashHistory } from 'react-router';

import EventBus from 'eventbusjs';

export default class Application extends React.Component {
	constructor(props) {
		super(props);

		window.eventBus = EventBus;
	}

	componentDidMount() {
		// Här kan vi hämta data från server om det behövs
	}

	render() {
		const {
			main
		} = this.props;
		console.log(this.props);
		return (
			<div className="app">
				<div className="container">

					<h1>ISOF React.js router app exempel</h1>

					<p>Exempelapp som använder react-router för att bygga upp strukturen av appen. Använder även <a href="https://github.com/ISOF-ITD/ISOF-React-modules">ISOF-React-modules</a>.</p>

					<hr/>

					<p><a href="#/">Första sidan</a> | <a href="#/components">Component exempel</a> | <a href="#/map">Visa example module med en karta</a> | <a href="#/form">Visa example module med formulär</a> | <a href="#/fetch">Visa example module med fetch</a></p>
					<div>
						<h3>Main module area</h3>
						<p>Här under kommer moduler att dyka upp.</p>

						<div style={{background: '#fff', padding: 20, border: '1px dashed #999'}}>
							{main || <div>Ingen modul visas för route "{this.props.route.path}".</div>}
						</div>

					</div>
	
				</div>
			</div>
		);
	}
}