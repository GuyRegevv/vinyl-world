/* eslint-disable no-undef */
import axios from 'axios';

const MAILCHIMP_SERVER = process.env.MAILCHIMP_API_KEY?.split('-')[1];
const AUTH_BUFFER = Buffer.from(`any:${process.env.MAILCHIMP_API_KEY}`).toString('base64');

const mailchimpAxios = axios.create({
	baseURL: `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0`,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': `Basic ${AUTH_BUFFER}`,
	},
});

const MailchimpAPI = {
	post: (url, body) => {
		return mailchimpAxios.post(url, body);
	},
	get: (url) => {
		return mailchimpAxios.get(url);
	},
};

//export interface IMailchimpError extends AxiosError {}

export default MailchimpAPI;
