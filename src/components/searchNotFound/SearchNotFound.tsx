import style from "./style.module.css";
import TestButton from "../listButton/ListButton";
import { ListButtonName } from "../../libs/types/listButton";
import { useTestsListContext } from "../../hooks/useTestsListContext";

const SearchNotFound: React.FC = () => {
	const { tests, setFilteredTests, setSearchFilterValue } =
		useTestsListContext();

	const filterButtonClickHandler = () => {
		setFilteredTests(tests);
		setSearchFilterValue("");
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
