import style from "./style.module.css";
import TestButton from "../listButton/ListButton";
import { ListButtonName } from "@libs/types/listButton";
import { useTestsListContext } from "@hooks/useTestsListContext";

const SearchNotFound: React.FC = () => {
	const { filterTests, setSearchFilterValue } = useTestsListContext();

	const filterButtonClickHandler = () => {
		setSearchFilterValue("");
		filterTests();
	};

	return (
		<div className={style.searchNotFoundWrapper}>
			<span>Your search did not match any results.</span>
			<TestButton
				buttonName={ListButtonName.RESET}
				clickHandler={filterButtonClickHandler}
			/>
		</div>
	);
};

export default SearchNotFound;
