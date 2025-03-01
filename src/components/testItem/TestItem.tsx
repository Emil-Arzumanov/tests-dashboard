import style from "./style.module.css";

import { useNavigate } from "react-router-dom";

import { TestModel } from "../../libs/models/test.model";
import { SiteModel } from "../../libs/models/site.model";
import { TEST_STATUS_TO_COLOR } from "../../libs/mappers/test.mapper";

import { getRandomColor } from "../../utils/style.util";
import FilterButton from "../listButton/ListButton";
import { pagesPaths } from "../../routes/pagePathsConfig";
import { TEST_STATUS_TO_BUTTON_NAME } from "../../libs/types/listButton";

interface IProps {
	test: TestModel;
	siteUrl: SiteModel["url"];
}

const TestItem: React.FC<IProps> = ({ test, siteUrl }) => {
	const navigate = useNavigate();
	const filterButtonClickHandler = () => {
		navigate(`${pagesPaths.testFinalize}/${test.id}`);
	};

	const randomColor = getRandomColor(["#E14165", "#C2C2FF", "#8686FF"]);
	const statusColor = TEST_STATUS_TO_COLOR[test.status];

	return (
		<div className={style.listItemWrapper}>
			<div
				className={style.listItemColoredLine}
				style={{
					backgroundColor: randomColor,
				}}
			></div>
			<div></div>
			<div className={style.listItemName}>{test.name}</div>
			<div>{test.type}</div>
			<div className={style.listItemStatus} style={{ color: statusColor }}>
				{test.status}
			</div>
			<div>{siteUrl}</div>
			<FilterButton
				buttonName={TEST_STATUS_TO_BUTTON_NAME[test.status]}
				clickHandler={filterButtonClickHandler}
			/>
		</div>
	);
};

export default TestItem;
