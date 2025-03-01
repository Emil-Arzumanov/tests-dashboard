import styles from "./styles.module.css";

interface IProps {
	text: string;
}

const PageHeader: React.FC<IProps> = ({ text }) => {
	return <h1 className={styles.headerStyle}>{text}</h1>;
};

export default PageHeader;
