"use server";
import { FormState, saveUser } from "./utils/save-user";

/**
 * Saves user information to cookies
 * @param formData - Form data containing username and job title
 * @returns Promise<FormState> - Success state with data or error information
 */
export async function saveUserInfo(
	prevState: FormState | undefined,
	formData: FormData
) {
	const result = await saveUser(formData);

	return result;
}
