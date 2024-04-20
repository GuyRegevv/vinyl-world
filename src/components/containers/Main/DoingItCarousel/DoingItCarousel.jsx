import React, { useState } from 'react';

import DoingItCarouselView from './DoingItCarousel.view';

const DoingItCarousel = () => {
	const [selectedItemIndexState, setSelectedItemIndexState] = useState(0);

	const setSelectedItemIndex = (index) => setSelectedItemIndexState(() => index);

	return <DoingItCarouselView selectedItemIndex={selectedItemIndexState} setSelectedItemIndex={setSelectedItemIndex} />;
};

export default React.memo(DoingItCarousel);
