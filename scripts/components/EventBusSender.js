import React from 'react';
import { hashHistory } from 'react-router';

export default class EventBusSender extends React.Component {
	constructor(props) {
		super(props);

		this.textInputValueChangeHandler = this.textInputValueChangeHandler.bind(this);
		this.sendMessageClickHandler = this.sendMessageClickHandler.bind(this);

		this.state = {
			message1: '',
			message2: ''
		};
	}

	textInputValueChangeHandler(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	sendMessageClickHandler() {
		var messageObject = {
			strings: [this.state.message1, this.state.message2],
			timeOfMessage: (new Date()).toGMTString()
		};
		window.eventBus.dispatch('eventBus.example.send', this, messageObject);
	}

	render() {
		return (
			<div style={{padding: 20, borderRadius: 4, background: '#f8f8f8', border: '1px solid #ccc'}}>
				<h2>EventBusSender modul</h2>

				<label>Meddelande 1: <br/><input name="message1" placeholder="Skriv meddelande 1" type="text" value={this.state.message1} onChange={this.textInputValueChangeHandler} /></label>
				<label>Meddelande 2: <br/><input name="message2" placeholder="Skriv meddelande 2" type="text" value={this.state.message2} onChange={this.textInputValueChangeHandler} /></label>
				<button onClick={this.sendMessageClickHandler}>window.eventBus.dispatch()</button>

			</div>
		);
	}
}