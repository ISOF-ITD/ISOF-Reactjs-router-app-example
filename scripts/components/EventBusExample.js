import React from 'react';
import { hashHistory } from 'react-router';
import EventBusSender from './EventBusSender';
import EventBusReceiver from './EventBusReceiver';

export default class EventBusExample extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2>EventbusExample</h2>

				<p>EventBus kan användas för att skicka meddelande mellan moduler. EventBus måste initaliseras i Application.js och läggs till det globala window objektet.</p>

				<strong>För att skicka enkelt meddelande:</strong>
				<pre>window.eventBus.dispatch('UNIQE_EVENT_NAME', 'Meddelande');</pre>
				<strong>För att skicka objekt som meddelande:</strong>
				<pre>{'window.eventBus.dispatch(\'UNIQE_EVENT_NAME\', this, {objectProperty: \'Meddelande can vara objekt\', numberProperty: 48});'}</pre>

				<strong>För att ta emot ett meddelande:</strong>
				<pre>
					{'window.eventBus.addEventListener(\'UNIQE_EVENT_NAME\', this.eventBusMessageHandler);'}
					<br/><br/>
					{'eventBusMessageHandler(event) {'}
					<br/>
					{'	// använd event objekt'}
					<br/>
					{'}'}
				</pre>

				<div className="row">

					<div className="six columns">
						<EventBusSender />
					</div>

					<div className="six columns">
						<EventBusReceiver />
					</div>

				</div>
			</div>
		);
	}
}