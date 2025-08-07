"use client";

import { useQuery } from "@apollo/client";
import { CHARACTER_QUERY } from "./apollo";
import {
	Box,
	ButtonGroup,
	Center,
	IconButton,
	Pagination,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useSearchParams } from "next/navigation";

import { useState } from "react";
import { Filter } from "./filter";
import { CharacterCard, CharacterCardSkeleton } from "./character-card";
import { useRouter } from "next/navigation";

const UNKNOWN_CHARACTER_IMAGE =
	"https://cdn.leonardo.ai/users/7ae5ec97-d5eb-4dc8-b62d-95189bc36453/generations/574d2a8a-d4e8-4a3d-9f0e-e59f6861b546/segments/2:4:1/Lucid_Realism_Create_a_placeholder_character_image_to_use_in_y_1.jpg";

export const Characters = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pageParam = searchParams.get("page");
	const characterParam = searchParams.get("character");
	const statusParam = searchParams.get("status");
	const page = pageParam ? parseInt(pageParam) : 1;
	const [characterFilter, setCharacterFilter] = useState<string[]>(
		characterParam ? [characterParam] : []
	);
	const [statusFilter, setStatusFilter] = useState<string[]>(
		statusParam ? [statusParam] : []
	);
	const { client, ...characterQuery } = useQuery(CHARACTER_QUERY, {
		variables: {
			page,
			filter: {
				name: characterFilter?.[0],
				status: statusFilter?.[0],
			},
		},
	});

	const handleFilterChange = (
		filter: "character" | "status",
		value: string[]
	) => {
		const newSearchParams = new URLSearchParams(searchParams);
		newSearchParams.delete("page");

		if (filter === "character") {
			if (value.length === 0) {
				setCharacterFilter([]);
				newSearchParams.delete("character");
			} else {
				setCharacterFilter(value);
				newSearchParams.set("character", value[0]);
			}
		} else {
			if (value.length === 0) {
				setStatusFilter([]);
				newSearchParams.delete("status");
			} else {
				setStatusFilter(value);
				newSearchParams.set("status", value[0]);
			}
		}

		router.push(`/info?${newSearchParams.toString()}`);
	};

	const handlePageChange = (page: number) => {
		const newSearchParams = new URLSearchParams(searchParams);
		newSearchParams.set("page", page.toString());
		window.scrollTo({ top: 0, behavior: "instant" });
		router.push(`/info?${newSearchParams.toString()}`);
	};

	return (
		<>
			<Filter
				handleFilterChange={handleFilterChange}
				characterFilter={characterFilter}
				statusFilter={statusFilter}
			/>
			{characterQuery.data?.characters?.results &&
				characterQuery.data.characters.results.length === 0 && (
					<Box p="4">
						<Text textAlign="center">No characters found</Text>
					</Box>
				)}
			<SimpleGrid gap="6" columns={[1, 2, 3, 4]}>
				{characterQuery.loading && (
					<>
						{Array.from({ length: 20 }).map((_, index) => (
							<CharacterCardSkeleton key={`skeleton-${index}`} />
						))}
					</>
				)}
				{characterQuery.data?.characters?.results && (
					<>
						{characterQuery.data.characters.results.map(
							(character, characterIndex) => (
								<CharacterCard
									key={`character-${characterIndex}`}
									name={character?.name ?? "Unknown Character"}
									image={character?.image ?? UNKNOWN_CHARACTER_IMAGE}
									status={character?.status ?? "Unknown Status"}
									origin={character?.origin?.name ?? "Unknown Origin"}
									species={character?.species ?? "Unknown Species"}
									gender={character?.gender ?? "Unknown Gender"}
									location={character?.location?.name ?? "Unknown Location"}
									episodes={character?.episode?.length ?? 0}
								/>
							)
						)}
					</>
				)}
			</SimpleGrid>
			{characterQuery.data?.characters?.info && (
				<Center p="4" pt="8">
					<Pagination.Root
						count={characterQuery.data.characters.info?.count ?? 0}
						pageSize={20}
						page={page}
						onPageChange={(details) => {
							handlePageChange(details.page);
						}}
					>
						<ButtonGroup variant="outline" size="sm">
							<Pagination.PrevTrigger asChild>
								<IconButton>
									<LuChevronLeft />
								</IconButton>
							</Pagination.PrevTrigger>

							<Pagination.PageText display={["block", "none"]} />

							<Pagination.Items
								render={(page) => (
									<IconButton
										display={["none", "block"]}
										variant={{ base: "outline", _selected: "solid" }}
										onMouseOver={() => {
											client.query({
												query: CHARACTER_QUERY,
												variables: {
													page: page.value,
													filter: {
														name: characterFilter?.[0],
														status: statusFilter?.[0],
													},
												},
											});
										}}
									>
										{page.value}
									</IconButton>
								)}
							/>

							<Pagination.NextTrigger asChild>
								<IconButton>
									<LuChevronRight />
								</IconButton>
							</Pagination.NextTrigger>
						</ButtonGroup>
					</Pagination.Root>
				</Center>
			)}
		</>
	);
};
