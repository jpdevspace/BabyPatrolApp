import React, { Fragment, useEffect, useState } from "react";
import { loadBabyRecords } from "../../controllers/firebaseDB";

// Components
import ReportTable from "./ReportTable";

const Reports = props => {
	const [ babyRecords, setBabyRecords ] = useState([]);

	useEffect(() => {
		const getAllRecords = async () => {
			const records = await loadBabyRecords();
			setBabyRecords(records);
		};
		getAllRecords();
	}, []);

	return (
		<Fragment>
			<h1>Reports</h1>
			<ReportTable data={ babyRecords } />
		</Fragment>
	);
};

export default Reports;
