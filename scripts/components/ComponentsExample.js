import React from 'react';
import { hashHistory } from 'react-router';

import DropdownMenu from './../../ISOF-React-modules/components/views/DropdownMenu';

export default class ComponentsExample extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2>DropdownMenu</h2>

				<hr/>

				<h3>Component exemple</h3>

				<pre>import DropdownMenu from './../../ISOF-React-modules/components/views/DropdownMenu';</pre>
				<pre>@import "../ISOF-React-modules/less/ui-components/dropdownmenu.less";</pre>

				<DropdownMenu label="Öppna">
					<p>DropdownMenu innehåll</p>
				</DropdownMenu>

			</div>
		);
	}
}