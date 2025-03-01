import style from "./style.module.css";
import {
	ListButtonName,
	BUTTON_NAME_TO_COLOR,
} from "../../libs/types/listButton";

interface IProps {
	buttonName: ListButtonName;
	clickHandler: () => void;
}

const ListButton: React.FC<IProps> = ({ buttonName, clickHandler }) => {
	return (
		<div className={style.listButtonWrapper}>
			<button
				className={style.listButton}
				style={{ backgroundColor: BUTTON_NAME_TO_COLOR[buttonName] }}
				onClick={clickHandler}
			>
				{buttonName}
			</button>
		</div>
	);
};

export default ListButton;
