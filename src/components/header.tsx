import {
	Avatar,
	Box,
	Button,
	HStack,
	IconButton,
	Text,
	VisuallyHidden,
} from "@chakra-ui/react";
import { cookies } from "next/headers";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
import { Navigation } from "./navigation";

export const Header = async () => {
	const cookieStore = await cookies();
	const usernameCookie = cookieStore.get("leonardo_username")?.value || "";

	return (
		<Box
			as={"header"}
			py={2}
			px={4}
			borderBottom="1px solid"
			borderColor="gray.200"
		>
			<HStack align="center" gap={4} justify="space-between">
				<Navigation />

				<HStack align="center" gap={4}>
					<Text fontWeight="bold" as="h2">
						{usernameCookie}
					</Text>
					<Avatar.Root size="sm" aria-label={`Avatar for ${usernameCookie}`}>
						<Avatar.Fallback name={usernameCookie} />
					</Avatar.Root>
				</HStack>
			</HStack>
		</Box>
	);
};
