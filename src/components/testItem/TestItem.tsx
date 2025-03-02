import style from "./style.module.css";

import { useNavigate } from "react-router-dom";

import { TestModel } from "@libs/models/test.model";
import { SiteModel } from "@libs/models/site.model";
import { TEST_STATUS_TO_COLOR } from "@libs/mappers/test.mapper";

import FilterButton from "../listButton/ListButton";
import { TEST_STATUS_TO_BUTTON_NAME } from "@libs/types/listButton";
import { useTestsListContext } from "@hooks/useTestsListContext";

interface IProps {
	test: TestModel;
	siteUrl: SiteModel["url"];
	pathToNavigate: string;
}

const TestItem: React.FC<IProps> = ({ test, siteUrl, pathToNavigate }) => {
	const { sitesColors } = useTestsListContext();

	const navigate = useNavigate();
	const filterButtonClickHandler = () => {
		navigate(`${pathToNavigate}/${test.id}`);
	};

	const statusColor = TEST_STATUS_TO_COLOR[test.status];

	return (
		<div className={style.listItemWrapper}>
			<div
				className={style.listItemColoredLine}
				style={{
					backgroundColor: sitesColors.get(test.siteId),
				}}
			></div>
			<div></div>
			<div className={style.listItemName}>{test.name}</div>
			<div className={style.listItemText}>{test.type}</div>
			<div
				className={`${style.listItemText} ${style.listItemStatus}`}
				style={{ color: statusColor }}
			>
				{test.status}
			</div>
			<div className={style.listItemText}>{siteUrl}</div>
			<FilterButton
				buttonName={TEST_STATUS_TO_BUTTON_NAME[test.status]}
				clickHandler={filterButtonClickHandler}
			/>
		</div>
	);
};

export default TestItem;
