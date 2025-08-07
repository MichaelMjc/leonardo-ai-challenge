import { List } from "@chakra-ui/react";
import { useColorModeValue } from "./color-mode";

type LinkListItemProps = {
	children: React.ReactNode;
	isActive: boolean;
};

/**
 * A list item component that displays a link with optional active state
 * @param children - The content to display inside the list item
 * @param isActive - Whether the list item is active
 */
export const LinkListItem = ({ children, isActive }: LinkListItemProps) => {
	const bgColor = useColorModeValue("gray.100", "gray.700");

	return (
		<List.Item
			p={2}
			_hover={{ bg: bgColor }}
			borderRadius="md"
			transition="background-color 0.2s ease-in-out"
			cursor="pointer"
			aria-current={isActive}
			aria-label={isActive ? "Current page" : "Go to page"}
			bg={isActive ? bgColor : undefined}
		>
			{children}
		</List.Item>
	);
};
