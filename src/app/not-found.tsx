import {
	Box,
	Button,
	Center,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import Link from "next/link";

const NOT_FOUND_IMAGE =
	"https://cdn.leonardo.ai/users/7ae5ec97-d5eb-4dc8-b62d-95189bc36453/generations/3cc09a14-356d-4f8a-a8a4-4ff934096862/segments/4:4:1/Lucid_Realism_Create_a_detailed_404_error_page_illustration_fe_3.jpg";

export default function NotFound() {
	return (
		<Box as="section" py={10} px={4}>
			<Center>
				<Stack>
					<Heading as="h1" size="2xl" textAlign="center">
						404 Page Not Found
					</Heading>
					<Text textAlign="center">Oh no Morty! We're lost!</Text>
					<Image asChild borderRadius="md" width="100%" maxW="300px">
						<NextImage
							src={NOT_FOUND_IMAGE}
							alt="404 not found"
							width={600}
							height={600}
						/>
					</Image>
					<Button asChild>
						<Link href="/">Let's go back home</Link>
					</Button>
				</Stack>
			</Center>
		</Box>
	);
}
