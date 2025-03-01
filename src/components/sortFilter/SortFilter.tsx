import style from "./style.module.css";
import { NullableTestModelArray } from "@libs/types/modelTypes";
import { SortValue } from "@libs/types/sortFilter";

interface IProps {
	tests: NullableTestModelArray;
	sortValue: SortValue;
	setSortValue: (payload: SortValue) => void;
	filterTestsProp: () => void;
}

const SortFilter: React.FC<IProps> = ({
	tests,
	sortValue,
	setSortValue,
	filteredTests,
}) => {
	return (
		<div className={style.sortFilterWrapper}>
			<div></div>
			<div>NAME</div>
			<div>TYPE</div>
			<div>STATUS</div>
			<div>SITE</div>
			<div></div>
		</div>
	);
};

export default SortFilter;
