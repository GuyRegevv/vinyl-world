import React, { useState } from 'react';

import { validateEmail } from '../../../../utils/validators';
import { countriesList } from '../../../../data/countries';

import SellerView from './Seller.view';

const Seller = () => {
	const [emailInputState, setEmailInputState] = useState(null);
	const [nameInputState, setNameInputState] = useState(null);
	const [countryState, setCountryState] = useState(null);
	const [isEmailOnErrorState, setIsEmailOnErrorState] = useState(false);
	const [isNameOnErrorState, setIsNameOnErrorState] = useState(false);
	const [isCountryOnErrorState, setIsCountryOnErrorState] = useState(false);

	const onEmailInputChange = (input) => setEmailInputState(() => input);

	const onNameInputChange = (input) => setNameInputState(() => input);

	const onCountrySelect = (country) => setCountryState(() => country);

	const onFormSubmit = (event) => {
		event.preventDefault();

		setIsEmailOnErrorState(() => false);
		setIsNameOnErrorState(() => false);
		setIsCountryOnErrorState(() => false);

		if (!emailInputState || !validateEmail(emailInputState)) {
			setIsEmailOnErrorState(() => true);
		}

		if (!nameInputState) {
			setIsNameOnErrorState(() => true);
		}

		if (!countryState || !countriesList.includes(countryState)) {
			setIsCountryOnErrorState(() => true);
		}
	};

	return (
		<SellerView
			emailInput={emailInputState}
			nameInput={nameInputState}
			country={countryState}
			isEmailOnError={isEmailOnErrorState}
			isNameOnError={isNameOnErrorState}
			isCountryOnError={isCountryOnErrorState}
			onEmailInputChange={onEmailInputChange}
			onNameInputChange={onNameInputChange}
			onCountrySelect={onCountrySelect}
			onFormSubmit={onFormSubmit}
		/>
	);
};

export default React.memo(Seller);
