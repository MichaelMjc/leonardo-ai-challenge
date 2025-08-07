"use server";
import { FormState, saveUser } from "./utils/save-user";

export async function saveUserInfo(
	prevState: FormState | undefined,
	formData: FormData
) {
	const result = await saveUser(formData);

	return result;
}
