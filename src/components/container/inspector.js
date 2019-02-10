/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings, MediaUpload } = wp.editor;
const { PanelBody, RangeControl, SelectControl, ToggleControl, Button, Spinner } = wp.components;

/**
 * Inspector controls
 */
export default class Inspector extends Component {

	render() {
		const { attributes, setAttributes } = this.props;

		return (
			<InspectorControls key="inspector">
				<PanelBody title={ __( 'Make Container Fluid', 'bs4-container-gutenberg-block' ) } >
					<ToggleControl
						label={ __( 'Container Fluid', 'bs4-container-gutenberg-block' ) }
						checked={ attributes.containerFluid }
						onChange={ () => setAttributes( { containerFluid: ! attributes.containerFluid } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Background Image', 'bs4-container-gutenberg-block' ) } >
					{ !! attributes.backgroundImage &&
						<MediaUpload
							title={ __( 'Set featured image', 'bs4-container-gutenberg-block' ) }
							onSelect={ ( value ) => setAttributes( { backgroundImage: value.url } ) }
							type="image"
							modalClass="editor-post-featured-image__media-modal"
							render={ ( { open } ) => (
								<Button className="editor-post-featured-image__preview" onClick={ open }>
									{ attributes.backgroundImage &&
										<img src={ attributes.backgroundImage } alt={ __( 'Featured image', 'bs4-container-gutenberg-block' ) } />
									}
									{ ! attributes.backgroundImage && <Spinner /> }
								</Button>
							) }
						/>
					}
					{ ! attributes.backgroundImage &&
						<MediaUpload
							onSelect={ ( value ) => setAttributes( { backgroundImage: value.url } ) }
							type="image"
							value={ attributes.backgroundImage }
							render={ ( { open } ) => (
								<Button className="button" onClick={ open }>
									{ __( 'Open Media Library', 'bs4-container-gutenberg-block' ) }
								</Button>
							) }
						/>
					}
					{ !! attributes.backgroundImage &&
						<Button onClick={ () => setAttributes( { backgroundImage: undefined } ) } isLink isDestructive>
							{ __( 'Remove Image', 'bs4-container-gutenberg-block' ) }
						</Button>
					}
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					colorSettings={ [
						{
							value: attributes.backgroundColor,
							onChange: ( backgroundColor ) => setAttributes( { backgroundColor } ),
							label: __( 'Background Color', 'bs4-container-gutenberg-block' ),
						},
					] }
				>
				</PanelColorSettings>
				<PanelBody title={ __( 'Padding', 'bs4-container-gutenberg-block' ) }>
					<SelectControl
						label={ __( 'Padding Top', 'bs4-container-gutenberg-block' ) }
						value={ attributes.paddingTop }
						onChange={ ( paddingTop ) => setAttributes( { paddingTop } ) }
						options={ [
							{ value: '', label: __( 'None', 'bs4-container-gutenberg-block' ) },
							{ value: 'pt-0', label: __( 'pt-0', 'bs4-container-gutenberg-block' ) },
							{ value: 'pt-1', label: __( 'pt-1', 'bs4-container-gutenberg-block' ) },
							{ value: 'pt-2', label: __( 'pt-2', 'bs4-container-gutenberg-block' ) },
							{ value: 'pt-3', label: __( 'pt-3', 'bs4-container-gutenberg-block' ) },
							{ value: 'pt-4', label: __( 'pt-4', 'bs4-container-gutenberg-block' ) },
							{ value: 'pt-5', label: __( 'pt-5', 'bs4-container-gutenberg-block' ) },
							{ value: 'pt-auto', label: __( 'pt-auto', 'bs4-container-gutenberg-block' ) }
						] }
					/> 
					<SelectControl
						label={ __( 'Padding Bottom', 'bs4-container-gutenberg-block' ) }
						value={ attributes.paddingBottom }
						onChange={ ( paddingBottom ) => setAttributes( { paddingBottom } ) }
						options={ [
							{ value: '', label: __( 'None', 'bs4-container-gutenberg-block' ) },
							{ value: 'pb-0', label: __( 'pb-0', 'bs4-container-gutenberg-block' ) },
							{ value: 'pb-1', label: __( 'pb-1', 'bs4-container-gutenberg-block' ) },
							{ value: 'pb-2', label: __( 'pb-2', 'bs4-container-gutenberg-block' ) },
							{ value: 'pb-3', label: __( 'pb-3', 'bs4-container-gutenberg-block' ) },
							{ value: 'pb-4', label: __( 'pb-4', 'bs4-container-gutenberg-block' ) },
							{ value: 'pb-5', label: __( 'pb-5', 'bs4-container-gutenberg-block' ) },
							{ value: 'pb-auto', label: __( 'pb-auto', 'bs4-container-gutenberg-block' ) }
						] }
					/> 
					<SelectControl
						label={ __( 'Padding Left', 'bs4-container-gutenberg-block' ) }
						value={ attributes.paddingLeft }
						onChange={ ( paddingLeft ) => setAttributes( { paddingLeft } ) }
						options={ [
							{ value: '', label: __( 'None', 'bs4-container-gutenberg-block' ) },
							{ value: 'pl-0', label: __( 'pl-0', 'bs4-container-gutenberg-block' ) },
							{ value: 'pl-1', label: __( 'pl-1', 'bs4-container-gutenberg-block' ) },
							{ value: 'pl-2', label: __( 'pl-2', 'bs4-container-gutenberg-block' ) },
							{ value: 'pl-3', label: __( 'pl-3', 'bs4-container-gutenberg-block' ) },
							{ value: 'pl-4', label: __( 'pl-4', 'bs4-container-gutenberg-block' ) },
							{ value: 'pl-5', label: __( 'pl-5', 'bs4-container-gutenberg-block' ) },
							{ value: 'pl-auto', label: __( 'pl-auto', 'bs4-container-gutenberg-block' ) }
						] }
					/> 
					<SelectControl
						label={ __( 'Padding Right', 'bs4-container-gutenberg-block' ) }
						value={ attributes.paddingRight }
						onChange={ ( paddingRight ) => setAttributes( { paddingRight } ) }
						options={ [
							{ value: '', label: __( 'None', 'bs4-container-gutenberg-block' ) },
							{ value: 'pr-0', label: __( 'pr-0', 'bs4-container-gutenberg-block' ) },
							{ value: 'pr-1', label: __( 'pr-1', 'bs4-container-gutenberg-block' ) },
							{ value: 'pr-2', label: __( 'pr-2', 'bs4-container-gutenberg-block' ) },
							{ value: 'pr-3', label: __( 'pr-3', 'bs4-container-gutenberg-block' ) },
							{ value: 'pr-4', label: __( 'pr-4', 'bs4-container-gutenberg-block' ) },
							{ value: 'pr-5', label: __( 'pr-5', 'bs4-container-gutenberg-block' ) },
							{ value: 'pr-auto', label: __( 'pr-auto', 'bs4-container-gutenberg-block' ) }
						] }
					/> 
				</PanelBody>
				<PanelBody title={ __( 'Margin', 'bs4-container-gutenberg-block' ) }>
					<SelectControl
						label={ __( 'Margin Top', 'bs4-container-gutenberg-block' ) }
						value={ attributes.marginTop }
						onChange={ ( marginTop ) => setAttributes( { marginTop } ) }
						options={ [
							{ value: '', label: __( 'None', 'bs4-container-gutenberg-block' ) },
							{ value: 'mt-0', label: __( 'mt-0', 'bs4-container-gutenberg-block' ) },
							{ value: 'mt-1', label: __( 'mt-1', 'bs4-container-gutenberg-block' ) },
							{ value: 'mt-2', label: __( 'mt-2', 'bs4-container-gutenberg-block' ) },
							{ value: 'mt-3', label: __( 'mt-3', 'bs4-container-gutenberg-block' ) },
							{ value: 'mt-4', label: __( 'mt-4', 'bs4-container-gutenberg-block' ) },
							{ value: 'mt-5', label: __( 'mt-5', 'bs4-container-gutenberg-block' ) },
							{ value: 'mt-auto', label: __( 'mt-auto', 'bs4-container-gutenberg-block' ) }	
						] }
					/> 
					<SelectControl
						label={ __( 'Margin Bottom', 'bs4-container-gutenberg-block' ) }
						value={ attributes.marginBottom }
						onChange={ ( marginBottom ) => setAttributes( { marginBottom } ) }
						options={ [
							{ value: '', label: __( 'None', 'bs4-container-gutenberg-block' ) },
							{ value: 'mb-0', label: __( 'mb-0', 'bs4-container-gutenberg-block' ) },
							{ value: 'mb-1', label: __( 'mb-1', 'bs4-container-gutenberg-block' ) },
							{ value: 'mb-2', label: __( 'mb-2', 'bs4-container-gutenberg-block' ) },
							{ value: 'mb-3', label: __( 'mb-3', 'bs4-container-gutenberg-block' ) },
							{ value: 'mb-4', label: __( 'mb-4', 'bs4-container-gutenberg-block' ) },
							{ value: 'mb-5', label: __( 'mb-5', 'bs4-container-gutenberg-block' ) },
							{ value: 'mb-auto', label: __( 'mb-auto', 'bs4-container-gutenberg-block' ) },								 
						] }
					/> 
				</PanelBody>
			</InspectorControls>
		);
	}

}
