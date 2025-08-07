import { Box, Flex, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

export const Footer = () => {
	return (
		<Box
			as="footer"
			pos="fixed"
			bottom={0}
			left={0}
			right={0}
			w="100%"
			h="12"
			aria-label="Site footer"
			bg="Background"
		>
			<Flex
				p={2}
				pb={1}
				borderTop="1px solid"
				borderColor="gray.500"
				align="center"
			>
				<Box flex={1} display={["none", "block"]} />
				<Box flex={1}>
					<Text textAlign={["left", "center"]} fontSize="sm">
						Leonardo AI Challenge v3.5
					</Text>
				</Box>
				<Box flex={[0, 1]} textAlign="right">
					<ColorModeButton />
				</Box>
			</Flex>
		</Box>
	);
};
