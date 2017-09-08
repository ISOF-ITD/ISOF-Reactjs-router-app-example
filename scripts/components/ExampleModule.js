import React from 'react';
import { hashHistory } from 'react-router';

import SimpleMap from './../../ISOF-React-modules/components/views/SimpleMap';

const markers = [
	{
		label: 'Göteborg',
		lat: 57.708870,
		lng: 11.97456
	},
	{
		label: 'Stockholm',
		lat: 59.329323,
		lng: 18.06858
	},
	{
		label: 'Malmö',
		lat: 55.604981,
		lng: 13.00382
	}
];

export default class ExampleModule extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			marker: null
		};
	}

	componentDidMount() {
		this.setState({
			marker: {
				label: this.props.params.label,
				lat: this.props.params.lat,
				lng: this.props.params.lng
			}
		});
	}

	componentWillReceiveProps(props) {
		this.setState({
			marker: {
				label: props.params.label,
				lat: props.params.lat,
				lng: props.params.lng
			}
		});
	}

	render() {
		var markerLinks = markers.map(function(marker, index) {
			return <span key={index}><a href={'#/map/label/'+marker.label+'/lat/'+marker.lat+'/lng/'+marker.lng}>{marker.label}</a> </span>;
		});

		return (
			<div>
				<h2>ExampleModule</h2>

				<p>SimpleMap module från ISOF-React-modules submodule repositoriet</p>

				<h3>Visa på karta:</h3>
				<p>{markerLinks}</p>

				<SimpleMap animate="true" marker={this.state.marker} />
			</div>
		);
	}
}