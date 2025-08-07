"use client";
import {
	Badge,
	Box,
	Card,
	CloseButton,
	Dialog,
	Heading,
	HStack,
	Image,
	Portal,
	Skeleton,
	SkeletonText,
	Stack,
	Text,
} from "@chakra-ui/react";
import NextImage from "next/image";

type CharacterCardProps = {
	name: string;
	image: string;
	status: string;
	origin: string;
	species: string;
	gender: string;
	location: string;
	episodes: number;
};

export const CharacterCard = ({
	image,
	name,
	status,
	origin,
	species,
	gender,
	location,
	episodes,
}: CharacterCardProps) => {
	return (
		<>
			<Dialog.Root size="lg" placement="center" motionPreset="slide-in-bottom">
				<Dialog.Trigger asChild>
					<Card.Root
						overflow="hidden"
						cursor="pointer"
						_hover={{ shadow: "md", transition: "all 0.2s ease-in-out" }}
						aria-label={`View details for ${name}`}
						role="button"
						tabIndex={0}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								e.currentTarget.click();
							}
						}}
						_focus={{
							outline: "2px solid",
							outlineColor: "blue.500",
							outlineOffset: "2px",
							shadow: "md",
						}}
						_focusVisible={{
							outline: "2px solid",
							outlineColor: "blue.500",
							outlineOffset: "2px",
						}}
					>
						<Image
							asChild
							aspectRatio="1"
							borderTopRadius="md"
							width="100%"
							alt={name}
						>
							<NextImage src={image} alt={name} width={300} height={300} />
						</Image>
						<Card.Body gap="2">
							<HStack justifyContent="space-between" w="100%">
								<Card.Title>{name}</Card.Title>
								<Card.Description>
									<Badge
										colorPalette={
											status === "Alive"
												? "green"
												: status === "unknown"
												? "bg"
												: "red"
										}
										variant="solid"
									>
										{status}
									</Badge>
								</Card.Description>
							</HStack>
							<Stack>
								<Text fontWeight="medium" color="fg.muted" fontSize="sm">
									Origin: {origin}
								</Text>
								<Text fontWeight="medium" color="fg.muted" fontSize="sm" m={0}>
									Species: {species}
								</Text>
							</Stack>
						</Card.Body>
					</Card.Root>
				</Dialog.Trigger>

				<Portal>
					<Dialog.Backdrop />
					<Dialog.Positioner p={4}>
						<Dialog.Content>
							<Dialog.Header>
								<Dialog.CloseTrigger asChild>
									<CloseButton size="sm" />
								</Dialog.CloseTrigger>
							</Dialog.Header>
							<Dialog.Body>
								<Stack align="start" direction={["column", "row"]}>
									<Box flex={1} w="100%">
										<Image
											asChild
											aspectRatio="1"
											borderRadius="md"
											alt={name}
											width="100%"
										>
											<NextImage
												src={image}
												alt={name}
												width={300}
												height={300}
											/>
										</Image>
									</Box>
									<Stack flex={1} w="100%">
										<HStack justifyContent="space-between" w="100%">
											<Heading>{name}</Heading>
											<Badge
												colorPalette={
													status === "Alive"
														? "green"
														: status === "unknown"
														? "bg"
														: "red"
												}
												variant="solid"
											>
												{status}
											</Badge>
										</HStack>

										<Text fontWeight="medium" color="fg.muted" fontSize="sm">
											Origin: {origin}
										</Text>
										<Text
											fontWeight="medium"
											color="fg.muted"
											fontSize="sm"
											m={0}
										>
											Species: {species}
										</Text>
										<Text
											fontWeight="medium"
											color="fg.muted"
											fontSize="sm"
											m={0}
										>
											Location: {location}
										</Text>
										<Text
											fontWeight="medium"
											color="fg.muted"
											fontSize="sm"
											m={0}
										>
											Episodes: {episodes}
										</Text>
										<Text
											fontWeight="medium"
											color="fg.muted"
											fontSize="sm"
											m={0}
										>
											Gender: {gender}
										</Text>
									</Stack>
								</Stack>
							</Dialog.Body>
						</Dialog.Content>
					</Dialog.Positioner>
				</Portal>
			</Dialog.Root>
		</>
	);
};

export const CharacterCardSkeleton = () => {
	return (
		<Box borderWidth="1px" borderRadius="md">
			<Skeleton aspectRatio="1" />
			<Box p="4" spaceY="8">
				<HStack gap="1" justifyContent="space-between" fontWeight="medium">
					<SkeletonText noOfLines={1} />
					<SkeletonText noOfLines={1} width="60px" alignSelf="flex-end" />
				</HStack>
				<SkeletonText
					noOfLines={2}
					fontWeight="medium"
					color="fg.muted"
					fontSize="sm"
					w={100}
				/>
			</Box>
		</Box>
	);
};
