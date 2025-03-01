import style from "./style.module.css";
import { NullableTestModelArray } from "@libs/types/modelTypes";
import searchImg from "@assets/search.png";

interface IProps {
	tests: NullableTestModelArray;
	searchValue: string;
	setSearchValue: (payload: string) => void;
	filterTestsProp: () => void;
}

const SearchFilter: React.FC<IProps> = ({
	tests,
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
				{tests?.length ?? 0} tests
			</div>
		</div>
	);
};

export default SearchFilter;
