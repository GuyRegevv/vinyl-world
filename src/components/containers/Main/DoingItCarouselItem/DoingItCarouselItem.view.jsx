/* eslint-disable react/prop-types */
import React from 'react';

import classes from './DoingItCarouselItem.module.scss';

const DoingItCarouselItemView = (props) => {
	return (
		<div className={classes['container']}>
			<div className={classes['container__img']}>
				<img src={props.image} alt={props.title} />
			</div>
			<h4 className={classes['container__title']}>{props.title}</h4>
			<span className={classes['container__text']}>{props.text}</span>
		</div>
	);
};

const memoizedDoingItCarouselItemView = React.memo(DoingItCarouselItemView);
memoizedDoingItCarouselItemView.displayName = 'memoizedDoingItCarouselItemView';
export default memoizedDoingItCarouselItemView;
