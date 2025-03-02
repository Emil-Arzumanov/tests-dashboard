import style from "./style.module.css";
import searchImg from "@assets/search.png";

interface IProps {
	filteredTestsLength: number;
	searchValue: string;
	setSearchValue: (payload: string) => void;
	filterTestsProp: () => void;
}

/**
 * Displays a search filter component that allows users to search for tests.
 * @param filteredTestsLength The count of available tests.
 * @param searchValue The current search input value.
 * @param setSearchValue A function to update the search input value.
 * @param filterTestsProp A function to trigger filtering when the search input changes.
 */
const SearchFilter: React.FC<IProps> = ({
	filteredTestsLength,
	searchValue,
	setSearchValue,
	filterTestsProp,
}) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		filterTestsProp();
	};

	return (
		<div className={style.searchFilterWrapper}>
			<div className={style.searchFilterImageWrapper}>
				<img src={searchImg} alt="Search" />
			</div>
			<input
				type="search"
				placeholder="What test are you looking for?"
				onChange={handleInputChange}
				value={searchValue}
			/>
			<div className={style.searchFilterCounter}>
				{filteredTestsLength} tests
			</div>
		</div>
	);
};

export default SearchFilter;
