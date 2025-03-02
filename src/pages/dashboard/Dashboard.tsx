import { TestsListContextProvider } from "@state/testsListState";

import CommonLayout from "@components/commonLayout/CommonLayout";
import PageHeader from "@components/pageHeader/PageHeader";
import FilteredList from "./filteredList/FilteredList";

/**
 * Displays the Dashboard page, which includes a header and a filtered list of tests.
 * Wraps the FilteredList component in a context provider to manage state.
 * @returns A CommonLayout containing a page header and the FilteredList component.
 */
const Dashboard: React.FC = () => {
	return (
		<CommonLayout>
			<PageHeader text="Dashboard" />
			<TestsListContextProvider>
				<FilteredList />
			</TestsListContextProvider>
		</CommonLayout>
	);
};

export default Dashboard;
