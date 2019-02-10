/**
 * BLOCK: Container
 */

import './editor.scss';
import Inspector from './inspector';
import classnames from 'classnames';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

const blockAttributes = {
	containerFluid: {
		type: 'bool',
		default: true,
	},
	paddingTop: {
		type: 'string',
		default: 'pt-5',		
	},
	paddingRight: {
		type: 'string',
	},
	paddingBottom: {
		type: 'string',
		default: 'pt-5',		
	},
	paddingLeft: {
		type: 'string',
	},
	marginTop: {
		type: 'string',
	},
	marginBottom: {
		type: 'string',
	},
	marginLeft: {
		type: 'string',
	},
	marginRight: {
		type: 'string',
	},
	backgroundColor: {
		type: 'string',
	},
	backgroundImage: {
		type: 'string',
	},
};

registerBlockType( 'bs4-container-gutenberg-block/container', {
	title: __( 'Container', 'bs4-container-gutenberg-block' ),
	description: __( 'Bootstrap 4 container / container-fluid with ability to add a background image or color, as well as padding and margins.', 'bs4-container-gutenberg-block' ),
	icon: 'shield',
	category: 'bs4-container-gutenberg-block',
	keywords: [
		__( 'container', 'bs4-container-gutenberg-block' ),
	],
	attributes: blockAttributes,

	edit: function( props ) {
		const { attributes, className } = props;

		const containerStyle = {
			backgroundColor: attributes.backgroundColor,
			backgroundImage: attributes.backgroundImage && 'url(' + attributes.backgroundImage + ')',
			marginLeft: '50px',
			marginRight: '50px',
		};

		const classes = classnames(
			className,
			{
				'container' : attributes.containerFluid !==true,
				'container-fluid' : attributes.containerFluid ==true,	
			}
		);

		return (
			<Fragment>
				<Inspector { ...props } />
				<div style={ containerStyle } className={ classes }>
					<div className="container-inner">
						<div className="container-inner-blocks">
							<InnerBlocks />
						</div>
					</div>
				</div>
			</Fragment>
		);
	},

	save: function( props ) {
		const { attributes, className } = props;

		const containerStyle = {
			backgroundColor: attributes.backgroundColor,
			backgroundImage: attributes.backgroundImage && 'url(' + attributes.backgroundImage + ')',
		};

		const classes = classnames(
			className,
			{
				'container' : attributes.containerFluid !==true,
				'container-fluid' : attributes.containerFluid ==true,	
			},			
			attributes.paddingTop,
			attributes.paddingBottom,
			attributes.paddingLeft,
			attributes.paddingRight,
			attributes.marginTop,
			attributes.marginBottom			
		);

		return (
			<div style={ containerStyle } className={ classes }>
				<div className="container-inner">
					<div className="container-inner-blocks">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		);
	},

	deprecated: [
		{
			attributes: blockAttributes,

			save: function( props ) {
				const { attributes, className } = props;

				const containerStyle = {
					backgroundColor: attributes.backgroundColor,
					backgroundImage: attributes.backgroundImage && 'url(' + attributes.backgroundImage + ')',
				};

				const classes = classnames(
					className,
					{
						'container' : attributes.containerFluid !==true,
						'container-fluid' : attributes.containerFluid ==true,	
					},
					attributes.paddingTop,
					attributes.paddingBottom,
					attributes.paddingLeft,
					attributes.paddingRight,
					attributes.marginTop,
					attributes.marginBottom			
				);

				return (
					<div style={ containerStyle } className={ classes }>
						<div className="container-inner">
							<InnerBlocks.Content />
						</div>
					</div>
				);
			},

		},

	],
} );