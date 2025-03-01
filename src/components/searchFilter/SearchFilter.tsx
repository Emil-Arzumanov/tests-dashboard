import style from "./style.module.css";
import { NullableTestModelArray } from "../../libs/types/ModelTypes";
import vector from "../../assets/Vector.png";

interface IProps {
	tests: NullableTestModelArray;
	searchValue: string;
	setSearchValue: (payload: string) => void;
	filterTests: () => void;
}

const SearchFilter: React.FC<IProps> = ({
	tests,
	searchValue,
	setSearchValue,
	filterTests,
}) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		filterTests();
	};

	return (
		<div className={style.wrapper}>
			<div className={style.imageWrapper}>
				<img src={vector} alt="Search" />
			</div>
			<input
				type="search"
				placeholder="What test are you looking for?"
				onChange={handleInputChange}
				value={searchValue}
			/>
			<div className={style.counter}>{tests?.length ?? 0} tests</div>
		</div>
	);
};

export default SearchFilter;
