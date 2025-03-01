import style from "./style.module.css";

import { TestModel } from "../../libs/models/test.model";
import { SiteModel } from "../../libs/models/site.model";
import { TEST_STATUS_TO_COLOR } from "../../libs/mappers/test.mapper";

import { getRandomColor } from "../../utils/style.util";
import TestButton from "../testButton/TestButton";

interface IProps {
	test: TestModel;
	siteUrl: SiteModel["url"];
}

const TestItem: React.FC<IProps> = ({ test, siteUrl }) => {
	const randomColor = getRandomColor(["#E14165", "#C2C2FF", "#8686FF"]);
	const statusColor = TEST_STATUS_TO_COLOR[test.status];

	return (
		<div className={style.listItem}>
			<div
				className={style.coloredLine}
				style={{
					backgroundColor: randomColor,
				}}
			></div>
			<div></div>
			<div className={style.name}>{test.name}</div>
			<div>{test.type}</div>
			<div className={style.status} style={{ color: statusColor }}>
				{test.status}
			</div>
			<div>{siteUrl}</div>
			<TestButton test={test} />
		</div>
	);
};

export default TestItem;
