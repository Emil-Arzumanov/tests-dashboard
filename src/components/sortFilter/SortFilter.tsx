import style from "./style.module.css";
import {
	SortFilterDirection,
	SortFilterField,
	SortValue,
} from "@libs/types/sortFilter";

import arrowDown from "@assets/arrowDown.png";
import arrowUp from "@assets/arrowUp.png";

interface IProps {
	sortValue: SortValue;
	setSortField: (payload: SortFilterField) => void;
	filterTestsProp: () => void;
}

const SortFilter: React.FC<IProps> = ({
	sortValue,
	setSortField,
	filterTestsProp,
}) => {
	const getArrow = (field: SortFilterField) => {
		if (
			field !== sortValue.field ||
			sortValue.direction === SortFilterDirection.NONE
		)
			return "";

		return (
			<img
				src={
					sortValue.direction === SortFilterDirection.ASC ? arrowUp : arrowDown
				}
				alt="Arrow"
			/>
		);
	};

	return (
		<div className={style.sortFilterWrapper}>
			<div></div>
			{Object.values(SortFilterField)
				.filter((field) => field !== SortFilterField.NONE)
				.map((field) => (
					<div key={field}>
						<div
							onClick={() => {
								setSortField(field);
								filterTestsProp();
							}}
							className={style.sortFilter}
						>
							<span>{field}</span> {getArrow(field)}
						</div>
					</div>
				))}
			<div></div>
		</div>
	);
};

export default SortFilter;
