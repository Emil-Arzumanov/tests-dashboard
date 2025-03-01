import style from "./style.module.css";
import { TestModel } from "../../libs/models/test.model";
import TestItem from "../testItem/TestItem";
import { SiteModel } from "../../libs/models/site.model";
import { getSiteUrlById } from "../../utils/testList.util";

interface IProps {
	tests: TestModel[];
	sites: SiteModel[];
}

const TestsList: React.FC<IProps> = ({ tests, sites }) => {
	return (
		<div className={style.testListWrapper}>
			{tests.map((test) => (
				<TestItem
					key={test.id}
					test={test}
					siteUrl={getSiteUrlById(sites, test.siteId)}
				/>
			))}
		</div>
	);
};

export default TestsList;
