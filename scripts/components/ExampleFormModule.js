import React from 'react';
import { hashHistory } from 'react-router';

import SimpleMap from './../../ISOF-React-modules/components/views/SimpleMap';
import AutocompleteInput from './../../ISOF-React-modules/components/views/AutocompleteInput';

import EventBus from 'eventbusjs';

export default class ExampleFormModule extends React.Component {
	constructor(props) {
		super(props);

		window.eventBus = EventBus;

		this.textInput1ValueChangeHandler = this.textInput1ValueChangeHandler.bind(this);
		this.textInput2ValueChangeHandler = this.textInput2ValueChangeHandler.bind(this);

		this.state = {
			textInput1Value: '',
			textInput2Value: ''
		};
	}

	textInput1ValueChangeHandler(event) {
		this.setState({
			textInput1Value: event.target.value
		});
	}

	textInput2ValueChangeHandler(event) {
		this.setState({
			textInput2Value: event.target.value
		});
	}

	componentDidMount() {

	}

	componentWillReceiveProps(props) {

	}

	render() {
		return (
			<div>
				<h2>ExampleFormModule</h2>

				<label>Input 1: <input type="text" value={this.state.textInput1Value} onChange={this.textInput1ValueChangeHandler} /></label>

				<label>Input 2: <AutocompleteInput minChars="4" valueField="name" searchUrl="http://www4.sprakochfolkminnen.se/sagner/api/locations/search/$s/search_field/place" value={this.state.textInput2Value} onChange={this.textInput2ValueChangeHandler} /></label>

				<p>
					<strong>Input 1 value:</strong> {this.state.textInput1Value}<br/><br/>
					<strong>Input 2 value:</strong> {this.state.textInput2Value}
				</p>
			</div>
		);
	}
}