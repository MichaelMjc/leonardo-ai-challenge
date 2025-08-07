import { UserForm } from "@/components/user-details";
import { Box, Container, Heading } from "@chakra-ui/react";
import { cookies } from "next/headers";

export default async function ProfilePage() {
	const cookieStore = await cookies();
	const usernameCookie = cookieStore.get("leonardo_username")?.value || "";
	const jobTitleCookie = cookieStore.get("leonardo_job_title")?.value || "";

	return (
		<Box py={10} px={4}>
			<Container
				maxW="md"
				p={4}
				border="1px solid"
				borderColor="gray.500"
				borderRadius="md"
			>
				<Heading as="h1" id="page-title" size="lg" mb={6} textAlign="center">
					User Profile
				</Heading>
				<UserForm username={usernameCookie} jobTitle={jobTitleCookie} />
			</Container>
		</Box>
	);
}
