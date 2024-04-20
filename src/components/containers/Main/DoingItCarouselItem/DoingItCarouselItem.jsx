import React from 'react';

import DoingItCarouselItemView from './DoingItCarouselItem.view';

const DoingItCarouselItem = (props) => {
	return <DoingItCarouselItemView image={props.image} title={props.title} text={props.text} testId={props.testId} />;
};

export default React.memo(DoingItCarouselItem);
