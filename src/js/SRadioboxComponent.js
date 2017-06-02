import SInputWebComponent from 'coffeekraken-sugar/js/core/SInputWebComponent'
import __getAnimationProperties from 'coffeekraken-sugar/js/dom/getAnimationProperties'
import __style from 'coffeekraken-sugar/js/dom/style'
import __uniqid from 'coffeekraken-sugar/js/utils/uniqid'

/**
 * @name 		SRadioboxComponent
 * @extends 	SInputWebComponent
 * Provide a nice and easy to customize radio and checkbox webcomponent extension
 * @example 		html
 * <label>
 * 	<input type="checkbox" is="radiobox" /> Hello
 * </label>
 * <label>
 * 	<input type="radio" is="radiobox" /> World
 * </label>
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

export default class SRadioboxComponent extends SInputWebComponent {

	/**
	 * Default props
	 * @definition 		SWebComponent.getDefaultProps
	 * @protected
	 */
	static get defaultProps() {
		return {
			color : 'default'
		}
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 * @protected
	 */
	static get physicalProps() {
		return ['color'];
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 * @protected
	 */
	componentMount() {
		super.componentMount();
		// try to get the id or name of the input
		let input_for = this.id || __uniqid();

		// stop if already the s-radiobox div
		if (this.nextSibling && this.nextSibling.nodeName != '#text' && this.nextSibling.classList.contains(this.componentClassName())) return;

		// remove the base input from the display
		this.style.position = 'absolute';
		this.style.left = '-299vw';

		// append an empty element after the input to style it
		let nodeType = 'div';
		if ( this.parentNode.nodeName.toLowerCase() !== 'label') {
			nodeType = 'label';
		}
		let styleNode = document.createElement(nodeType);
		this.addComponentClass(styleNode);
		if (nodeType === 'label' && input_for) {
			styleNode.setAttribute('for', input_for);
		}
		if ( ! this.id) {
			this.setAttribute('id', input_for);
		}
		this.parentNode.insertBefore(styleNode, this.nextSibling);
	}
}
