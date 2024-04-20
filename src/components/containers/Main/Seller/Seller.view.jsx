import React from 'react';
import Select from 'react-select';
import { Element } from 'react-scroll';

import { countriesList } from '../../../../data/countries';

import classes from './Seller.module.scss';

const SellerView = (props) => {
	const countrySelectOptions = countriesList.map((country) => ({
		value: country,
		label: country,
	}));

	return (
		<section id="seller" className={classes['sellersSection']}>
			<Element className={classes['sellersSectionInner']} name="sellerSection">
				<div className={classes['sellersSectionText']}>
					<h2 className={classes['sellersSectionText__title']}>
						Sellers / Vendors / Record stores?
						<br />
						Lets get in touch.
					</h2>
					<p className={classes['sellersSectionText__text']}>
						Sounds interesting? We would love to tell you more about our product, and your
						<br />
						part in changing how records are sold online with Vinyl world.
					</p>
				</div>
				<form className={classes['sellersSectionForm']} noValidate onSubmit={props.onFormSubmit}>
					<label className={classes['sellersSectionForm__label']}>Your work email address</label>
					<input
						className={classes['sellersSectionForm__input']}
						type="email"
						placeholder="Your email address"
						value={props.emailInput ?? ''}
						onChange={({ currentTarget: { value } }) => props.onEmailInputChange(value)}
					/>
					<span className={classes['sellersSectionForm__errorValidationMessage']} style={{ visibility: props.isEmailOnError ? 'visible' : 'hidden' }}>
						Please use a work email address..
					</span>

					<label className={classes['sellersSectionForm__label']}>Your name / Store name</label>
					<input
						className={classes['sellersSectionForm__input']}
						type="text"
						placeholder="Name / Store name"
						value={props.nameInput ?? ''}
						onChange={({ currentTarget: { value } }) => props.onNameInputChange(value)}
					/>
					<span className={classes['sellersSectionForm__errorValidationMessage']} style={{ visibility: props.isNameOnError ? 'visible' : 'hidden' }}>
						Please enter a name so we’ll know how to contact you back!
					</span>

					<label className={classes['sellersSectionForm__label']}>Country</label>
					<Select
						className={classes['sellersSectionForm__selectCountry']}
						isSearchable
						options={countrySelectOptions}
						placeholder="Select country"
						components={{ IndicatorSeparator: null }}
						theme={(theme) => ({
							...theme,
							colors: {
								...theme.colors,
								primary: '#afb3da',
								primary25: '#f4f5f7',
							},
						})}
						styles={{
							control: (provided) => ({
								...provided,
								backgroundColor: '#f4f5f7',
								border: 'none',
							}),
							menu: (provided) => ({
								...provided,
								backgroundColor: '#fafafa',
							}),
							menuList: (provided) => ({
								...provided,
								maxHeight: '200px',
							}),
							option: (provided) => ({
								...provided,
								fontSize: '1.4rem',
								color: '#474a57',
							}),
							placeholder: (provided) => ({
								...provided,
								width: '100%',
								fontSize: '1.4rem',
								color: '#474a57',
							}),
							singleValue: (provided) => ({
								...provided,
								width: '100%',
								fontSize: '1.4rem',
								color: '#474a57',
							}),
							input: (provided) => ({
								...provided,
								width: '100%',
								fontSize: '1.4rem',
								color: '#474a57',
							}),
							noOptionsMessage: (provided) => ({
								...provided,
								padding: '5px 0',
								fontSize: '1.3rem',
								color: '#474a57',
							}),
						}}
						value={{
							label: props.country ?? 'Select country',
							value: props.country,
						}}
						filterOption={(option, input) => option.value.toLowerCase().startsWith(input.toLowerCase())}
						onChange={(selected) => props.onCountrySelect(selected.value)}
					/>
					<span
						className={classes['sellersSectionForm__errorValidationMessage']}
						style={{ visibility: props.isCountryOnError ? 'visible' : 'hidden' }}
					>
						Please select a country from the list above.
					</span>

					<div className={classes['formSubmitContainer']}>
						<button className={classes['formSubmitContainer__submit']} type="submit">
							Send
						</button>
						{props.isFormOnSuccess && (
							<span className={classes['formSubmitContainer__successMessage']}>
								Thank you!
								<br />
								We will get in touch as development progresses
							</span>
						)}
					</div>
				</form>
			</Element>
		</section>
	);
};

export default React.memo(SellerView);
