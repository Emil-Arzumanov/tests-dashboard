import { TestsListContextProvider } from "@state/testsListState";

import CommonLayout from "@components/commonLayout/CommonLayout";
import PageHeader from "@components/pageHeader/PageHeader";
import FilteredList from "./filteredList/FilteredList";

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
