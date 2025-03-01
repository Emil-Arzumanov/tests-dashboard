import styles from "./styles.module.css";

const CommonLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default CommonLayout;
