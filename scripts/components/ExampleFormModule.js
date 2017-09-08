import React from 'react';
import { hashHistory } from 'react-router';

import SimpleMap from './../../ISOF-React-modules/components/views/SimpleMap';
import AutocompleteInput from './../../ISOF-React-modules/components/controls/AutocompleteInput';

export default class ExampleFormModule extends React.Component {
	constructor(props) {
		super(props);

		this.textInputValueChangeHandler = this.textInputValueChangeHandler.bind(this);

		this.state = {
			textInput1Value: '',
			textInput2Value: ''
		};
	}

	textInputValueChangeHandler(event) {
		this.setState({
			[event.target.name]: event.target.value
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

				<label>Input 1: <br/><input name="textInput1Value" type="text" value={this.state.textInput1Value} onChange={this.textInputValueChangeHandler} /></label>

				<label>Input 2: <br/><AutocompleteInput inputName="textInput2Value" minChars="4" valueField="name" searchUrl="http://www4.sprakochfolkminnen.se/sagner/api/locations/search/$s/search_field/place" value={this.state.textInput2Value} onChange={this.textInputValueChangeHandler} /></label>

				<p>
					<strong>Input 1 value:</strong> {this.state.textInput1Value}<br/><br/>
					<strong>Input 2 value:</strong> {this.state.textInput2Value}
				</p>
			</div>
		);
	}
}