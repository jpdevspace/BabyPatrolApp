import React, { Fragment, useContext } from "react";
import { BabyRecordsContext } from "../../contexts/BabyRecordsContext";

// Components
import ReportTable from "./ReportTable";

const Reports = props => {
  const { babyRecords } = useContext(BabyRecordsContext);

  return (
    <Fragment>
      <h1>Reports</h1>
      <ReportTable data={babyRecords} />
    </Fragment>
  );
};

export default Reports;
