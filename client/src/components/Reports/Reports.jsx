import React, { Fragment, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import { BabyRecordsContext } from "../../contexts/BabyRecordsContext";

// Components
import ReportTable from "./ReportTable";

const Reports = props => {
  const { babyRecords } = useContext(BabyRecordsContext);
  const { isAuthed } = useContext(AuthContext);

  return (
    <Fragment>
      {!isAuthed ? <Redirect to="/login" /> : null}
      <h1>Reports</h1>
      <ReportTable data={babyRecords} />
    </Fragment>
  );
};

export default Reports;
