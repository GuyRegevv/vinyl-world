import React from 'react';

import { concatClasses } from '../../../utils/component';

import brandLogo from '/images/brand-logo-white.png';

import classes from './Footer.module.scss';

const FooterView = () => {
	return (
		<footer className={classes['footer']}>
			<img className={classes['footer__logo']} src={brandLogo} alt="Vinyl World" />
			<div className={classes['footerText']}>
				<span className={concatClasses(classes, 'footerText__text', 'footerText__text--withMargin')}>© 2024 Vinyl World. All rights reserved</span>
				<div className={classes['rightFooterTextContainer']}>
					<span className={classes['rightFooterTextContainer__text']}>
						*Vinyl World: Recommender app is non-commercial and not for profit.
						<br />
						*By subscribing to our newsletter you agree to our
					</span>
					<span className={classes['rightFooterTextContainer__text']}>&nbsp;</span>
					<a
						href="http://pages.flycricket.io/vinyl-world-br/privacy.html"
						target="_blank"
						className={classes['rightFooterTextContainer__text']}
						rel="noreferrer"
					>
						Privacy Policy
					</a>
				</div>
			</div>
		</footer>
	);
};

export default React.memo(FooterView);
