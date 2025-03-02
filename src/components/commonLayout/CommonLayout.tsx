import styles from "./styles.module.css";

interface IProps {
	children: React.ReactNode;
}

/**
 * Provides a common layout wrapper for child components.
 * @param children The child components to be wrapped inside the layout.
 * @returns A div with a common layout style that wraps the provided children.
 */
const CommonLayout: React.FC<IProps> = ({ children }) => {
	return <div className={styles.commonLayoutWrapper}>{children}</div>;
};

export default CommonLayout;
