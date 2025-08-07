import { Characters } from "@/components/character-grid";
import { Box, Heading } from "@chakra-ui/react";
import { Suspense } from "react";

export default function InfoPage() {
	return (
		<Box py={10} px={4}>
			<Heading as="h1" id="info-page-title" size="lg" mb={6} textAlign="center">
				Character Information
			</Heading>
			<Box as="section">
				{/* Suspense is necessary here due to a next js build error for useSearchParams */}
				<Suspense>
					<Characters />
				</Suspense>
			</Box>
		</Box>
	);
}
