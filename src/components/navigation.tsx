"use client";

import { usePathname } from "next/navigation";
import {
	Box,
	List,
	Text,
	VisuallyHidden,
	HStack,
	Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { LuPersonStanding, LuUserRound, LuHouse } from "react-icons/lu";
import { LinkListItem } from "./ui/link-list-item";
import React, { useState } from "react";

type PrefetchLinkProps = {
	href: string;
	children: React.ReactNode;
} & React.ComponentProps<typeof Link>;

const PrefetchLink = ({ children, ...props }: PrefetchLinkProps) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<Link
			onMouseEnter={() => setIsActive(true)}
			prefetch={isActive ? null : false}
			{...props}
		>
			{children}
		</Link>
	);
};

export const Navigation = () => {
	const pathname = usePathname();

	return (
		<>
			<Box as="nav">
				<List.Root variant="plain" align="start" flexDirection="row" gap={2}>
					<LinkListItem isActive={pathname === "/"}>
						<HStack asChild gap={1}>
							<ChakraLink p={2} asChild textDecoration="none">
								<PrefetchLink href="/" aria-label="Go to home page">
									<LuHouse />
									<VisuallyHidden>Go to home page</VisuallyHidden>
									<Text
										fontSize="sm"
										as="span"
										display={["none", "inline-block"]}
									>
										Home
									</Text>
								</PrefetchLink>
							</ChakraLink>
						</HStack>
					</LinkListItem>
					<LinkListItem isActive={pathname === "/info"}>
						<HStack asChild gap={1}>
							<ChakraLink p={2} asChild textDecoration="none">
								<PrefetchLink
									href="/info"
									aria-label="Go to character info page"
								>
									<LuPersonStanding />
									<VisuallyHidden>Go to character info page</VisuallyHidden>
									<Text
										fontSize="sm"
										as="span"
										display={["none", "inline-block"]}
									>
										Character Info
									</Text>
								</PrefetchLink>
							</ChakraLink>
						</HStack>
					</LinkListItem>
					<LinkListItem isActive={pathname === "/profile"}>
						<HStack asChild gap={1}>
							<ChakraLink p={2} asChild textDecoration="none">
								<PrefetchLink href="/profile" aria-label="Go to profile page">
									<LuUserRound />
									<VisuallyHidden>Go to profile page</VisuallyHidden>
									<Text
										fontSize="sm"
										as="span"
										display={["none", "inline-block"]}
									>
										Profile
									</Text>
								</PrefetchLink>
							</ChakraLink>
						</HStack>
					</LinkListItem>
				</List.Root>
			</Box>
		</>
	);
};
