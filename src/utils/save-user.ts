"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import z from "zod";

const FormSchema = z.object({
	username: z.string().min(1, "Username is required"),
	jobTitle: z.string().min(1, "Job title is required"),
});

export type FormState =
	| {
			success: false;
			errors?: {
				fieldErrors: {
					username?: string;
					jobTitle?: string;
				};
			};
	  }
	| undefined
	| {
			success: true;
			data: {
				username: string;
				jobTitle: string;
			};
	  };

export async function saveUser(formData: FormData) {
	const rawFormData = Object.fromEntries(formData);

	const parsedFormData = FormSchema.safeParse(rawFormData);
	if (!parsedFormData.success) {
		const treeErrors = z.treeifyError(parsedFormData.error);

		return {
			success: false as const,
			errors: {
				fieldErrors: {
					username: treeErrors.properties?.username?.errors[0],
					jobTitle: treeErrors.properties?.jobTitle?.errors[0],
				},
			},
		};
	}

	const cookieStore = await cookies();
	cookieStore.set("leonardo_username", parsedFormData.data.username);
	cookieStore.set("leonardo_job_title", parsedFormData.data.jobTitle);

	return {
		success: true as const,
		data: parsedFormData.data,
	};
}
