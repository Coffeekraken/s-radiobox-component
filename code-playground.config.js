module.exports = {
	// server port
	port : 3000,

	// title
	title : 's-radiobox-component',

	// layout
	layout : 'right',

	// compile server
	compileServer : {

		// compile server port
		port : 4000

	},

	// editors
	editors : {
		html : {
			language : 'html',
			data : `
				<h1 class="h3 m-b-small">
					Coffeekraken s-radiobox-component
				</h1>
				<p class="p p--lead m-b-bigger">
					Provide a nice and easy to customize radio and checkbox webcomponent extension
				</p>
				<h2 class="h4 m-b-big">
					Checkbox
				</h2>
				<div style="font-size:2em">
					<div class="m-b-big">
						<label>
							<input type="checkbox" is="s-radiobox" /> Hello
						</label>
						<label>
							<input type="checkbox" is="s-radiobox" color="primary" /> World
						</label>
						<label>
							<input type="checkbox" is="s-radiobox" color="secondary" /> Universe
						</label>
						<br />
						<label>
							<input type="checkbox" is="s-radiobox" color="success" /> Earth
						</label>
						<label>
							<input type="checkbox" is="s-radiobox" color="warning" /> John Doe
						</label>
						<label>
							<input type="checkbox" is="s-radiobox" color="error" /> Moon
						</label>
						<label>
							<input type="checkbox" is="s-radiobox" color="info" /> Nelson
						</label>
					</div>
				</div>
				<h2 class="h4 m-b-big">
					Radio
				</h2>
				<div style="font-size:2em">
					<div class="m-b-big">
						<label>
							<input type="radio" is="s-radiobox" name="radio01" /> Hello
						</label>
						<label>
							<input type="radio" is="s-radiobox" name="radio01" color="primary" /> World
						</label>
						<label>
							<input type="radio" is="s-radiobox" name="radio01" color="secondary" /> Universe
						</label>
						<br />
						<label>
							<input type="radio" is="s-radiobox" name="radio01" color="success" /> Earth
						</label>
						<label>
							<input type="radio" is="s-radiobox" name="radio01" color="warning" /> John Doe
						</label>
						<label>
							<input type="radio" is="s-radiobox" name="radio01" color="error" /> Moon
						</label>
						<label>
							<input type="radio" is="s-radiobox" name="radio01" color="info" /> Nelson
						</label>
					</div>
				</div>
			`
		},
		css : {
			language : 'sass',
			data : `
				@import 'node_modules/coffeekraken-sugar/index';
				@import 'node_modules/coffeekraken-s-typography-component/index';
				@import 'index';
				@include s-init();
				@include s-classes();
				@include s-typography-classes();
				body {
					padding: s-space(big);
				}
				@include s-radiobox-classes(
					$colors : default primary secondary success warning error info
				);
				label {
					display: inline-block;
					margin-right: s-space(default);
					margin-bottom: s-space(default);
				}
			`
		},
		js : {
			language : 'js',
			data : `
				import SRadioboxComponent from './dist/index'
			`
		}
	}
}
