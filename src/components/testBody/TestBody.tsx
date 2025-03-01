import style from "./style.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TestModel } from "../../libs/models/test.model";

import { getTestById } from "../../api/services/tests.service";

const TestBody: React.FC = () => {
	const { id } = useParams();
	const testId = Number(id);

	const [testName, setTestName] = useState<TestModel["name"] | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (isNaN(testId)) {
			setError(`Test id is not a number. id=${id}`);
			return;
		}

		setError(null);
		setTestName(null);

		getTestById(testId)
			.then(({ name }) => {
				setTestName(name);
			})
			.catch((err) => {
				console.log(err, `Test not found id=${id}`);
				setError(`Test not found. id=${id}`);
			});
	}, [id, testId]);

	return <div className={style.testBody}>{error || testName}</div>;
};

export default TestBody;
