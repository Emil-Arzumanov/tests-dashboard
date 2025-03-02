import style from "./style.module.css";
import TestButton from "../listButton/ListButton";
import { ListButtonName } from "@libs/types/listButton";
import { useTestsListContext } from "@hooks/useTestsListContext";

/**
 * Displays a message when no search results are found and provides a button to reset the search filter.
 * @returns A div containing a "not found" message and a reset button to clear the search filter.
 */
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
