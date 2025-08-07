"use client";
import {
	Container,
	createListCollection,
	Portal,
	Select,
	Stack,
} from "@chakra-ui/react";

const FILTER_CHARACTER_OPTIONS = createListCollection({
	items: [
		{
			label: "Rick",
			value: "rick",
		},
		{
			label: "Morty",
			value: "morty",
		},
		{
			label: "Summer",
			value: "summer",
		},
		{
			label: "Beth",
			value: "beth",
		},
		{
			label: "Jerry",
			value: "jerry",
		},
	],
});
const FILTER_STATUS_OPTIONS = createListCollection({
	items: [
		{
			label: "Alive",
			value: "alive",
		},
		{
			label: "Dead",
			value: "dead",
		},
		{
			label: "Unknown",
			value: "unknown",
		},
	],
});

type FilterProps = {
	handleFilterChange: (filter: "character" | "status", value: string[]) => void;
	characterFilter: string[];
	statusFilter: string[];
};

/**
 * A filter for Rick and Morty characters and their status
 * @param handleFilterChange - Filter change callback handler
 * @param characterFilter - The current character filter value
 * @param statusFilter - The current status filter value
 */
export const Filter = ({
	handleFilterChange,
	characterFilter,
	statusFilter,
}: FilterProps) => {
	return (
		<Container maxW="md" pb="4">
			<Stack alignItems="flex-start" gap="4" direction={["column", "row"]}>
				<Select.Root
					size="sm"
					collection={FILTER_CHARACTER_OPTIONS}
					onValueChange={(option) => {
						handleFilterChange("character", option.value);
					}}
					value={characterFilter}
				>
					<Select.HiddenSelect />
					<Select.Label>Filter by character</Select.Label>
					<Select.Control>
						<Select.Trigger>
							<Select.ValueText placeholder="Select character" />
						</Select.Trigger>

						<Select.IndicatorGroup>
							<Select.ClearTrigger />
							<Select.Indicator />
						</Select.IndicatorGroup>
					</Select.Control>
					<Portal>
						<Select.Positioner>
							<Select.Content>
								{FILTER_CHARACTER_OPTIONS.items.map((character) => (
									<Select.Item item={character} key={character.value}>
										{character.label}
										<Select.ItemIndicator />
									</Select.Item>
								))}
							</Select.Content>
						</Select.Positioner>
					</Portal>
				</Select.Root>
				<Select.Root
					size="sm"
					collection={FILTER_STATUS_OPTIONS}
					onValueChange={(option) => {
						handleFilterChange("status", option.value);
					}}
					multiple={false}
					value={statusFilter}
				>
					<Select.HiddenSelect />
					<Select.Label>Filter by status</Select.Label>
					<Select.Control>
						<Select.Trigger>
							<Select.ValueText placeholder="Select status" />
						</Select.Trigger>
						<Select.IndicatorGroup>
							<Select.ClearTrigger />
							<Select.Indicator />
						</Select.IndicatorGroup>
					</Select.Control>
					<Portal>
						<Select.Positioner>
							<Select.Content>
								{FILTER_STATUS_OPTIONS.items.map((status) => (
									<Select.Item item={status} key={status.value}>
										{status.label}
										<Select.ItemIndicator />
									</Select.Item>
								))}
							</Select.Content>
						</Select.Positioner>
					</Portal>
				</Select.Root>
			</Stack>
		</Container>
	);
};
