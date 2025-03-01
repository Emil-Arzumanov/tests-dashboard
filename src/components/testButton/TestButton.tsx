import style from "./style.module.css";
import { TestModel, TestStatusModel } from "../../libs/models/test.model";
import { useNavigate } from "react-router-dom";
import { pagesPaths } from "../../routes/pagePathsConfig";

interface IProps {
	test: TestModel;
}

const TestButton: React.FC<IProps> = ({ test }) => {
	const navigate = useNavigate();

	let buttonName = "Results";
	let buttonColor = "#2ee5ac";
	let handleClick = () => {
		navigate(`${pagesPaths.testResults}/${test.id}`);
	};

	if (test.status === TestStatusModel.DRAFT) {
		buttonName = "Finalize";
		buttonColor = "#7d7d7d";
		handleClick = () => {
			navigate(`${pagesPaths.testFinalize}/${test.id}`, { replace: true });
		};
	}

	return (
		<div className={style.buttonWrapper}>
			<button
				className={style.button}
				style={{ backgroundColor: buttonColor }}
				onClick={handleClick}
			>
				{buttonName}
			</button>
		</div>
	);
};

export default TestButton;
