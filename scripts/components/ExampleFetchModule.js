import React from 'react';
import { hashHistory } from 'react-router';

import EventBus from 'eventbusjs';

export default class ExampleFetchModule extends React.Component {
	constructor(props) {
		super(props);

		window.eventBus = EventBus;

		this.state = {
			data: []
		};
	}

	// Vi anroper getData när vår modul finns på webbsidan
	componentDidMount() {
		this.getData(this.props.params.category || null);
	}

	// Vi anroper getData när vår modul tar emor nya parameters
	componentWillReceiveProps(props) {
		this.getData(props.params.category || null)
	}

	getData(category) {
		fetch('http://www4.sprakochfolkminnen.se/sagner/api/records/0/50/type/tryckt;arkiv/'+(category ? 'category/'+category : ''))
			.then(function(response) {
				// Första steget i fetch är att leverera data som json till nästa steg
				return response.json()
			}).then(function(json) {
				// Nu kan vi använda den data som vi hämtat, vi lägger det inn i state objectet
				this.setState({
					data: json.data
				});
			}.bind(this)).catch(function(ex) {
				console.log('parsing failed', ex)
			})
		;
	}

	render() {
		// Uppdaterar webbsidan med ny data från state objektet

		// Skapar en lista över alla sägner som hittats
		var recordsData = this.state.data.length > 0 ? this.state.data.map(function(item, index) {
			return <div key={index}><a href={'http://www.sprakochfolkminnen.se/test-och-utveckling/kartor/sagenkarta.html#/record/'+item.id}>{item.title}</a></div>;
		}) : [];

		return (
			<div>
				<h2>ExampleFetchModule</h2>

				<p>Modul som hämtar data från server</p>

				<p>Kategori som bokstav can läggas till som parameter i url (#/fetch/<b>category/a</b>). Exempel: <a href="#/fetch/category/a">Döden och de döda (a)</a> och <a href="#/fetch/category/d">Vattenväsen (d)</a>.</p>

				<h3>Sägner</h3>

				{recordsData}
			</div>
		);
	}
}