import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import { concatClasses } from '../../../../utils/component';

import browseImg from '/images/doing-it-browse.png';
import searchImg from '/images/doing-it-search.png';
import pileUpImg from '/images/doing-it-pileup.png';
import personalizedImg from '/images/doing-it-personalized.png';
import sellerImg from '/images/doing-it-seller.png';

import VSvg from '../../../ui/VSvg';

import DoingItCarouselItem from '../DoingItCarouselItem';

import classes from './DoingItCarousel.module.scss';

const DoingItCarouselView = (props) => {

	const renderIndicator = (e, isSelected, index,) => {
		if (isSelected) {
			return (
				<button
					className={concatClasses(classes, 'indicator', 'indicator--selected')}
					type="button"
					role="button"
				/>
			);
		}

		return (
			<button
				className={classes['indicator']}
				type="button"
				role="button"
				onClick={() => props.setSelectedItemIndex(index)}
			/>
		);
	};

	const renderArrowPrev = (clickHandler, hasPrev) => {
		if (!hasPrev) {
			return null;
		}

		return (
			<VSvg
				className={concatClasses(classes, 'arrow', 'arrow--prev')}
				name="carouselArrow"
				onClick={clickHandler}
			/>
		);
	};

	const renderArrowNext = (clickHandler, hasNext) => {
		if (!hasNext) {
			return null;
		}

		return (
			<VSvg
				className={concatClasses(classes, 'arrow', 'arrow--next')}
				name="carouselArrow"
				onClick={clickHandler}
			/>
		);
	};

	return (
		<Carousel
			className={classes['carousel']}
			selectedItem={props.selectedItemIndex}
			showThumbs={false}
			showStatus={false}
			renderIndicator={renderIndicator}
			renderArrowPrev={renderArrowPrev}
			renderArrowNext={renderArrowNext}
		>
			<DoingItCarouselItem
				image={browseImg}
				title='Browse'
				text='Not sure what you’re looking for?<br />We’ve got you covered.'
				testId="doing-it-carousel-first-item"
			/>
			<DoingItCarouselItem
				image={searchImg}
				title='Search'
				text='No more multi-site, nerve racking, record hunting. A simple search and you got it.'
			/>
			<DoingItCarouselItem
				image={pileUpImg}
				title='Pile up, listen and choose'
				text='Stack up the records of your choice - listen, enjoy, share, and get them straight to your mailbox.'
			/>
			<DoingItCarouselItem
				image={personalizedImg}
				title='Personalized experience'
				text='Everybody’s got their own taste. We make sure you get the best out of yours.'
			/>
			<DoingItCarouselItem
				image={sellerImg}
				title='Trusted sellers'
				text='No more sketchy record vendors!'
			/>
		</Carousel>
	);
};

const memoizedDoingItCarouselView = React.memo(DoingItCarouselView);
memoizedDoingItCarouselView.displayName = 'memoizedDoingItCarouselView';
export default memoizedDoingItCarouselView;

