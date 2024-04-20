import React from 'react';

import introImgMobileResponsive from '/images/intro-logo-mobile.png';
import introImgWebResponsive from '/images/intro-logo-web.png';

import classes from './Intro.module.scss';

const IntroView = () => {
	return (
		<div className={classes['introSectionContainer']}>
			<section className={classes['introSection']}>
				<h1 className={classes['introSection__header']}>Experience the record store on any screen, everywhere.</h1>
				<img className={classes['introSection__ipadImg']} src={introImgWebResponsive} alt="Intro" />
				<img className={classes['introSection__mobileImg']} src={introImgMobileResponsive} alt="Intro" />\
				<img className={classes['introSection__webImg']} src={introImgWebResponsive} alt="Intro" />
			</section>
		</div>
	);
};

export default React.memo(IntroView);
