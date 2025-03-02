import styles from "./styles.module.css";

interface IProps {
	text: string;
}

/**
 * Displays a page header with the provided text.
 * @param text The text to display as the page header.
 * @returns A styled h1 element containing the provided text.
 */
const PageHeader: React.FC<IProps> = ({ text }) => {
	return <h1 className={styles.pageHeader}>{text}</h1>;
};

export default PageHeader;
