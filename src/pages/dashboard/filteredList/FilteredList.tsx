import { useEffect } from "react";

import { useTestsListContext } from "../../../hooks/useTestsListContext";
import { getAllTests } from "../../../api/services/tests.service";

import SearchFilter from "../../../components/searchFilter/SearchFilter";
import TestsList from "../../../components/testsList/TestsList";
import { getAllSites } from "../../../api/services/sites.service";
import SearchNotFound from "../../../components/searchNotFound/SearchNotFound";

const FilteredList: React.FC = () => {
	const {
		setTests,
		sites,
		setSites,
		filteredTests,
		setFilteredTests,
		searchFilterValue,
		setSearchFilterValue,
		debouncedFilterTests,
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
				filterTests={debouncedFilterTests}
			/>
			{filteredTests === null ? (
				<SearchNotFound />
			) : (
				<TestsList tests={filteredTests} sites={sites} />
			)}
		</>
	);
};

export default FilteredList;
