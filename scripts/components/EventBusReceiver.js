import React from 'react';

export default class EventBusReceiver extends React.Component {
	constructor(props) {
		super(props);

		this.eventBusMessageHandler = this.eventBusMessageHandler.bind(this);

		this.state = {
			eventBusMessage: null
		};
	}

	componentDidMount() {
		window.eventBus.addEventListener('eventBus.example.send', this.eventBusMessageHandler);
	}

	eventBusMessageHandler(event, message) {
		this.setState({
			eventBusMessage: message
		});
	}

	render() {
		return (
			<div style={{padding: 20, borderRadius: 4, background: '#f8f8f8', border: '1px solid #ccc'}}>
				<h2>EventBusReceiver modul</h2>

				<div>Meddelande från EventBus: <br/><pre>{JSON.stringify(this.state.eventBusMessage, null, 2)}</pre></div>
			</div>
		);
	}
}