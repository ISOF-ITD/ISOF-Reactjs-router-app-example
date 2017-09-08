import React from 'react';
import { hashHistory } from 'react-router';

import DropdownMenu from './../../ISOF-React-modules/components/controls/DropdownMenu';

export default class ComponentsExample extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2>DropdownMenu</h2>

				<DropdownMenu label="Öppna" containerType="text">
					<p>DropdownMenu innehåll</p>
				</DropdownMenu>

			</div>
		);
	}
}