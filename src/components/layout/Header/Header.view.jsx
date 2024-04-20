import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import brandLogo from '/images/brand-logo.png';
// import playStoreLogo from '@/images/google-play.png';
// import appStoreLogo from '@/images/app-store.png';

// import VSvg from '@/ui/VSvg';

// import { concatClasses } from '@/utils/component';

import classes from './Header.module.scss';

const HeaderView = () => {
	return (
		<div className={classes['headerContainer']}>
			<header className={classes['header']}>
				<div className={classes['leftHeader']}>
					<img className={classes['leftHeader__logo']} src={brandLogo} alt="Vinyl world" />
					<ScrollLink className={classes['headerContact']} to="sellerSection" smooth>
						Contact us (Sellers? press here!)
					</ScrollLink>
				</div>
			</header>
		</div>
	);
};

export default React.memo(HeaderView);
