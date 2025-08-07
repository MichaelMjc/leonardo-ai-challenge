"use client";

import { usePathname } from "next/navigation";
import { Button, HStack, IconButton, VisuallyHidden } from "@chakra-ui/react";
import Link from "next/link";
import { LuPersonStanding, LuUserRound, LuHouse } from "react-icons/lu";

export const Navigation = () => {
	const pathname = usePathname();

	return (
		<HStack align="center" gap={1} as="nav">
			<Link href="/">
				<VisuallyHidden>Go to home page</VisuallyHidden>
				<IconButton
					variant="ghost"
					size="sm"
					aria-label="Go to home page"
					aria-current={pathname === "/"}
				>
					<LuHouse />
				</IconButton>
			</Link>
			<Link href="/info">
				<VisuallyHidden>Go to character info page</VisuallyHidden>
				<IconButton
					variant="ghost"
					size="sm"
					aria-label="Go to character info page"
					aria-current={pathname === "/info"}
					display={["inline-flex", "none"]}
				>
					<LuPersonStanding />
				</IconButton>
				<Button
					variant="ghost"
					size="sm"
					aria-current={pathname === "/info"}
					bg={pathname === "/info" ? "gray.100" : undefined}
					display={["none", "inline-flex"]}
				>
					Character Info
				</Button>
			</Link>
			<Link href="/profile">
				<VisuallyHidden>Go to profile page</VisuallyHidden>
				<IconButton
					variant="ghost"
					size="sm"
					aria-label="Go to profile page"
					aria-current={pathname === "/profile"}
					display={["inline-flex", "none"]}
				>
					<LuUserRound />
				</IconButton>
				<Button
					variant="ghost"
					size="sm"
					aria-current={pathname === "/profile"}
					bg={pathname === "/profile" ? "gray.100" : undefined}
					display={["none", "inline-flex"]}
				>
					Profile
				</Button>
			</Link>
		</HStack>
	);
};
