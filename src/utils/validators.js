/**
 * The function validates for a valid email
 * @param email the email input
 * @returns boolean flag indicates whether the email is valid
 */
export const validateEmail = (email) => {
	const emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

	return emailRegex.test(email);
};
