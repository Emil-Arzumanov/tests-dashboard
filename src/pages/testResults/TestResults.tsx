import CommonLayout from "@components/commonLayout/CommonLayout";
import PageHeader from "@components/pageHeader/PageHeader";
import ReturnButton from "@components/returnButton/ReturnButton";
import TestBody from "@components/testBody/TestBody";

const TestResults: React.FC = () => {
	return (
		<CommonLayout>
			<PageHeader text="Results" />
			<TestBody />
			<ReturnButton />
		</CommonLayout>
	);
};

export default TestResults;
