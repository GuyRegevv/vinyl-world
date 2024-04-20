import React from 'react';

import searchImg from '/images/doing-it-search.png';
import browseImg from '/images/doing-it-browse.png';
import pileUpImg from '/images/doing-it-pileup.png';
import personalizedImg from '/images/doing-it-personalized.png';
import sellerImg from '/images/doing-it-seller.png';

import classes from './DoingIt.module.scss';

const DoingItView = () => {
	return (
		<div className={classes['doingItSectionContainer']}>
			<section className={classes['doingItSection']}>
				<h2 className={classes['doingItSection__header']}>How we’re doing it</h2>
				<div className={classes['doingItFirstRow']}>
					<div className={classes['doingItItem']}>
						<img className={classes['doingItItem__img']} src={browseImg} alt="doing it browse" />
						<h4 className={classes['doingItItem__title']}>Browse</h4>
						<span className={classes['doingItItem__text']}>
							Not sure what you’re looking for?
							<br />
							We’ve got you covered.
						</span>
					</div>
					<div className={classes['doingItItem']}>
						<img className={classes['doingItItem__img']} src={searchImg} alt="doing it search" />
						<h4 className={classes['doingItItem__title']}>Search</h4>
						<span className={classes['doingItItem__text']}>No more multi-site, nerve racking, record hunting. A simple search and you got it.</span>
					</div>
					<div className={classes['doingItItem']}>
						<img className={classes['doingItItem__img']} src={pileUpImg} alt="doing it pilu up and choose" />
						<h4 className={classes['doingItItem__title']}>Pile up, listen and choose</h4>
						<span className={classes['doingItItem__text']}>
							Stack up the records of your choice - listen, enjoy, share, and get them straight to your mailbox.
						</span>
					</div>
				</div>
				<div className={classes['doingItSecondRow']}>
					<div className={`${classes['doingItItem']} ${classes['doingItItem--withMargin']}`}>
						<img className={classes['doingItItem__img']} src={personalizedImg} alt="doing it personalized" />
						<h4 className={classes['doingItItem__title']}>Personalized experience</h4>
						<span className={classes['doingItItem__text']}>Everybody’s got their own taste. We make sure you get the best out of yours.</span>
					</div>
					<div className={classes['doingItItem']}>
						<img className={classes['doingItItem__img']} src={sellerImg} alt="doing it - seller" />
						<h2 className={classes['doingItItem__title']}>Trusted sellers</h2>
						<span className={classes['doingItItem__text']}>No more sketchy record vendors!</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default React.memo(DoingItView);
