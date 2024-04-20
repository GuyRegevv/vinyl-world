import React from 'react';

import marketplaceImg from '/images/marketplace.png';
import marketplaceMobileImg from '/images/marketplace-mobile.png';

import classes from './TypicalMarketplaces.module.scss';

const TypicalMarketplacesView = () => {
	return (
		<div className={classes['typicalMarketplacesSectionContainer']}>
			<section className={classes['typicalMarketplacesSection']}>
				<h3 className={classes['typicalMarketplacesSection__header']}>{'Forget about those typical "marketplaces"'}</h3>
				<div className={classes['typicalMarketplacesTextContainer']}>
					<p className={classes['typicalMarketplacesTextContainer__text']}>
						{
							"A record store should feel like one. Todays marketplaces make it seem like they're made only for expert comparison researchers. You never know what to buy, and if you do, you go through hell just to find the right record. Imagine a world where you can find and buy records online, and it won’t be a frustrating, boring mess of an experience! "
						}
					</p>
					<img className={classes['typicalMarketplacesTextContainer__img']} src={marketplaceImg} alt="marketplace" />
					<img className={classes['typicalMarketplacesTextContainer__mobileImg']} src={marketplaceMobileImg} alt="marketpalce" />
				</div>
			</section>
		</div>
	);
};

export default React.memo(TypicalMarketplacesView);
