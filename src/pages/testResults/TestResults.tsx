import CommonLayout from "@components/commonLayout/CommonLayout";
import PageHeader from "@components/pageHeader/PageHeader";
import ReturnButton from "@components/returnButton/ReturnButton";
import TestBody from "@components/testBody/TestBody";

/**
 * Displays the Test Results page, which includes a header, the test body, and a return button.
 * Wraps the components in a CommonLayout for consistent styling.
 * Right now is very similar to TestFinalize, but it's a different page that may change in future.
 * @returns A CommonLayout containing a page header, the TestBody component, and a ReturnButton.
 */
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
