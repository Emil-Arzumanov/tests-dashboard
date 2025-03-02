import style from "./style.module.css";
import { TestModel } from "@libs/models/test.model";
import TestItem from "../testItem/TestItem";
import { SiteModel } from "@libs/models/site.model";
import { getSiteUrlById } from "@utils/testList.util";
import { pagesPaths } from "@routes/pagePathsConfig";

interface IProps {
	tests: TestModel[];
	sites: SiteModel[];
}

/**
 * Displays List of tests.
 * @param tests Array of tests that will be displayed.
 * @param sites Array of sites, each site has url that will be displayed, each test has siteId, that fits id of site.
 */
const TestsList: React.FC<IProps> = ({ tests, sites }) => {
	return (
		<div className={style.testListWrapper}>
			{tests.map((test) => (
				<TestItem
					key={test.id}
					test={test}
					siteUrl={getSiteUrlById(sites, test.siteId)}
					pathToNavigate={pagesPaths.testFinalize}
				/>
			))}
		</div>
	);
};

export default TestsList;
