import React from 'react'

import VSvgView from './VSvg.view';

const VSvg = (props) => {
	return (
		<VSvgView style={props.style} className={props.className} name={props.name} onClick={props.onClick} />
	);
};

VSvg.displayName = 'VSvg';
VSvg.defaultProps = {};

export default React.memo(VSvg);
