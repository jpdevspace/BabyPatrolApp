import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import { BabyRecordsContext } from "../../contexts/BabyRecordsContext";

import ReportTable from "./ReportTable";

const Reports = props => {
  const { babyRecords } = useContext(BabyRecordsContext);
  const { isAuthed } = useContext(AuthContext);

  return (
    <div id="bp-reports">
      {!isAuthed ? <Redirect to="/login" /> : null}
      <ReportTable data={babyRecords} />
    </div>
  );
};

export default Reports;
