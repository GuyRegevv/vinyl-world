import icons from '/src/icons';

import classes from './VSvg.module.scss';


const VSvgView= (props) => {
	const svgClasses = classes['container'] + (props.className ? ` ${props.className}` : '');

	return (
		<svg
			style={props.style}
			className={svgClasses}
			version="1.1"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox={'0 0 ' + icons[props.name][0]}
			dangerouslySetInnerHTML={{ __html: icons[props.name][1] ?? '' }}
			onClick={props.onClick}
		/>
	);
};

VSvgView.displayName = 'VSvgView';
VSvgView.defaultProps = {};

export default VSvgView;
