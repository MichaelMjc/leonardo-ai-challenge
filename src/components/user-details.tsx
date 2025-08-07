"use client";
import {
	Avatar,
	Link,
	Field,
	Fieldset,
	HStack,
	Input,
	VStack,
	Button,
	Text,
} from "@chakra-ui/react";
import { useActionState, useEffect, useRef, useState } from "react";
import { saveUserInfo } from "@/actions";
import { toaster } from "./ui/toaster";

type UserDetailsProps = {
	username: string;
	jobTitle: string;
};

type UserDetailsViewProps = {
	username: string;
	jobTitle: string;
	onEdit: () => void;
};

/**
 * Displays a form for editing user details and optionally redirect to the given URL after saving
 * @param username - The user's display name
 * @param jobTitle - The user's job title
 * @param onSuccess - Callback function to be called when the form is successfully submitted
 */
export const UserForm = ({
	username: initialUsername,
	jobTitle: initialJobTitle,
	onSuccess,
}: UserDetailsProps & {
	onSuccess?: () => void;
}) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [state, formAction, pending] = useActionState(saveUserInfo, undefined);
	const [username, setUsername] = useState(initialUsername);
	const [jobTitle, setJobTitle] = useState(initialJobTitle);

	useEffect(() => {
		if (state?.success) {
			onSuccess?.();
		}
	}, [state]);

	return (
		<form ref={formRef} action={formAction}>
			<Fieldset.Root size="lg">
				<Fieldset.Legend id="user-details-legend">User Details</Fieldset.Legend>
				<Fieldset.Content>
					<Field.Root invalid={!!state?.errors?.fieldErrors?.username}>
						<Field.Label htmlFor="username">Username</Field.Label>
						<Input
							id="username"
							name="username"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							autoFocus
							aria-describedby={
								state?.errors?.fieldErrors?.username
									? "username-error"
									: undefined
							}
							aria-invalid={!!state?.errors?.fieldErrors?.username}
						/>
						{state?.errors?.fieldErrors?.username && (
							<Field.ErrorText id="username-error" role="alert">
								{state?.errors.fieldErrors.username}
							</Field.ErrorText>
						)}
					</Field.Root>
					<Field.Root invalid={!!state?.errors?.fieldErrors?.jobTitle}>
						<Field.Label htmlFor="jobTitle">Job title</Field.Label>
						<Input
							id="jobTitle"
							name="jobTitle"
							type="text"
							value={jobTitle}
							onChange={(e) => setJobTitle(e.target.value)}
							aria-describedby={
								state?.errors?.fieldErrors?.jobTitle
									? "jobtitle-error"
									: undefined
							}
							aria-invalid={!!state?.errors?.fieldErrors?.jobTitle}
						/>
						{state?.errors?.fieldErrors?.jobTitle && (
							<Field.ErrorText id="jobtitle-error" role="alert">
								{state?.errors.fieldErrors.jobTitle}
							</Field.ErrorText>
						)}
					</Field.Root>
				</Fieldset.Content>
				<Button type="submit" alignSelf="flex-start" loading={pending}>
					Submit
				</Button>
			</Fieldset.Root>
		</form>
	);
};

const UserDetailsView = ({
	username,
	jobTitle,
	onEdit,
}: UserDetailsViewProps) => {
	return (
		<VStack
			gap={6}
			align="flex-start"
			role="region"
			aria-label="User profile information"
		>
			<HStack align="center" gap={4}>
				<Avatar.Root size="2xl" aria-label={`Avatar for ${username}`}>
					<Avatar.Fallback name={username} />
				</Avatar.Root>
				<VStack align="flex-start" gap={1}>
					<Text fontWeight="bold" as="h2">
						{username}
					</Text>
					<Text fontSize="sm">{jobTitle}</Text>
				</VStack>
			</HStack>
			<HStack gap={2}>
				<Link href="/info">
					<Button variant="subtle" size={["sm", "md"]}>
						Go to Character Info
					</Button>
				</Link>
				<Button
					variant="outline"
					onClick={onEdit}
					aria-label="Edit user details"
					size={["sm", "md"]}
				>
					Edit
				</Button>
			</HStack>
		</VStack>
	);
};

/**
 * Displays user profile information with edit functionality
 * @param username - The user's display name
 * @param jobTitle - The user's job title
 */
export const UserDetails = ({ username, jobTitle }: UserDetailsProps) => {
	const [isEditing, setIsEditing] = useState(false);

	if (username && jobTitle && !isEditing) {
		return (
			<UserDetailsView
				username={username}
				jobTitle={jobTitle}
				onEdit={() => setIsEditing(true)}
			/>
		);
	}

	return (
		<>
			<UserForm
				username={username}
				jobTitle={jobTitle}
				onSuccess={() => {
					setIsEditing(false);
					// Needed due to a flushSync error
					// The alternative here would be to use the toaster.promise() method where we wrap the form action with callbacks
					// https://github.com/vercel/next.js/discussions/67660#discussioncomment-12599544
					setTimeout(() => {
						toaster.success({
							description: "User info saved successfully",
							type: "info",
						});
					}, 0);
				}}
			/>
		</>
	);
};
