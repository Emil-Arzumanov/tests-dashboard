import style from "./style.module.css";
import { ListButtonName, BUTTON_NAME_TO_COLOR } from "@libs/types/listButton";

interface IProps {
	buttonName: ListButtonName;
	clickHandler: () => void;
}

/**
 * Displays a customizable button with a specific name and color.
 * @param buttonName The name of the button, which determines its color.
 * @param clickHandler A function to handle the button click event.
 * @returns A styled button with the provided name and color.
 */
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
