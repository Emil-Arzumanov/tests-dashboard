import CommonLayout from "@components/commonLayout/CommonLayout";
import PageHeader from "@components/pageHeader/PageHeader";
import ReturnButton from "@components/returnButton/ReturnButton";
import TestBody from "@components/testBody/TestBody";

const TestFinalize: React.FC = () => {
	return (
		<CommonLayout>
			<PageHeader text="Finalize" />
			<TestBody />
			<ReturnButton />
		</CommonLayout>
	);
};

export default TestFinalize;
