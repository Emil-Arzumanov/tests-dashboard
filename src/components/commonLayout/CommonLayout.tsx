import styles from "./styles.module.css";

interface IProps {
	children: React.ReactNode;
}

const CommonLayout: React.FC<IProps> = ({ children }) => {
	return <div className={styles.commonLayoutWrapper}>{children}</div>;
};

export default CommonLayout;
