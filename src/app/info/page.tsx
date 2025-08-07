import { Characters } from "@/components/character-grid";
import { Box, Heading } from "@chakra-ui/react";

export default function InfoPage() {
	return (
		<Box py={10} px={4}>
			<Heading as="h1" id="info-page-title" size="lg" mb={6} textAlign="center">
				Character Information
			</Heading>
			<Box as="section">
				<Characters />
			</Box>
		</Box>
	);
}
