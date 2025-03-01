import { useEffect } from "react";

import { useTestsListContext } from "@hooks/useTestsListContext";
import { getAllTests } from "@api/services/tests.service";

import SearchFilter from "@components/searchFilter/SearchFilter";
import TestsList from "@components/testsList/TestsList";
import { getAllSites } from "@api/services/sites.service";
import SearchNotFound from "@components/searchNotFound/SearchNotFound";
import SortFilter from "@components/sortFilter/SortFilter";

const FilteredList: React.FC = () => {
	const {
		setTests,
		sites,
		setSites,
		filteredTests,
		setFilteredTests,
		searchFilterValue,
		setSearchFilterValue,
		debouncedSearchFilter,
		sortFilterValue,
		setSortFilterValue,
		debouncedSortFilter,
	} = useTestsListContext();

	useEffect(() => {
		getAllTests().then((tests) => {
			setTests(tests);
			setFilteredTests(tests);
		});

		getAllSites().then((sites) => {
			setSites(sites);
		});

		return () => {
			setTests([]);
			setFilteredTests([]);
			setSites([]);
		};
	}, []);

	return (
		<>
			<SearchFilter
				tests={filteredTests}
				searchValue={searchFilterValue}
				setSearchValue={setSearchFilterValue}
				filterTestsProp={debouncedSearchFilter}
			/>
			{filteredTests === null ? (
				<SearchNotFound />
			) : (
				<>
					<SortFilter
						tests={filteredTests}
						sortValue={sortFilterValue}
						setSortValue={setSortFilterValue}
						filterTestsProp={debouncedSortFilter}
					/>
					<TestsList tests={filteredTests} sites={sites} />
				</>
			)}
		</>
	);
};

export default FilteredList;
