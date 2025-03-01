import styles from "./style.module.css";
import arrowLeftImg from "../../assets/arrowLeft.png";
import { useNavigate } from "react-router-dom";
import { pagesPaths } from "../../routes/pagePathsConfig";

const ReturnButton: React.FC = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(pagesPaths.testsLists);
	};

	return (
		<button className={styles.returnButton} onClick={handleClick}>
			<img src={arrowLeftImg} alt="Arrow left" /> Back
		</button>
	);
};

export default ReturnButton;
