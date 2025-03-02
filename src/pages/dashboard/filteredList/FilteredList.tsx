import { useEffect } from "react";

import { useTestsListContext } from "@hooks/useTestsListContext";
import { getAllTests } from "@api/services/tests.service";

import SearchFilter from "@components/searchFilter/SearchFilter";
import TestsList from "@components/testsList/TestsList";
import { getAllSites } from "@api/services/sites.service";
import SearchNotFound from "@components/searchNotFound/SearchNotFound";
import SortFilter from "@components/sortFilter/SortFilter";

/**
 * Displays a filtered list of tests with search and sort functionality.
 * Fetches tests and sites data on mount and resets state on unmount.
 * Renders a search filter, sort filter, and either a list of tests or a "not found" message.
 * @returns A component that manages and displays the filtered list of tests.
 */
const FilteredList: React.FC = () => {
	const {
		setTests,
		sites,
		setSites,
		setSitesColors,
		filteredTests,
		setFilteredTests,
		searchFilterValue,
		setSearchFilterValue,
		sortFilterValue,
		setSortFilterValue,
		debouncedFilter,
	} = useTestsListContext();

	useEffect(() => {
		getAllTests().then((tests) => {
			setTests(tests);
			setFilteredTests(tests);
		});

		getAllSites().then((sites) => {
			setSites(sites);
			setSitesColors(["#E14165", "#C2C2FF", "#8686FF"]);
		});

		return () => {
			setTests([]);
			setFilteredTests([]);
			setSites([]);
			setSitesColors([]);
		};
	}, []);

	return (
		<>
			<SearchFilter
				filteredTestsLength={filteredTests?.length ?? 0}
				searchValue={searchFilterValue}
				setSearchValue={setSearchFilterValue}
				filterTestsProp={debouncedFilter}
			/>
			{filteredTests === null ? (
				<SearchNotFound />
			) : (
				<>
					<SortFilter
						sortValue={sortFilterValue}
						setSortField={setSortFilterValue}
						filterTestsProp={debouncedFilter}
					/>
					<TestsList tests={filteredTests} sites={sites} />
				</>
			)}
		</>
	);
};

export default FilteredList;
