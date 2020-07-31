import React, { Fragment, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { BabyRecordsContext } from "../../contexts/BabyRecordsContext";
import { Redirect } from "react-router-dom";

import BabyEventWidget from "./BabyEventWidget";
import BabyEventWidgetcontainer from "./BabyEventWidgetContainer";
import "./dashboard.css";

import allActivities from "../../config/activities";

const Dashboard = props => {
  const { isAuthed } = useContext(AuthContext);
  const { loadAllUserData } = useContext(BabyRecordsContext);

  useEffect(() => {
    loadAllUserData();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {!isAuthed ? <Redirect to="/login" /> : null}
      <BabyEventWidgetcontainer>
        {allActivities.map((act, i) => (
          <BabyEventWidget key={i} icon={act.icon} type={act.label} />
        ))}
      </BabyEventWidgetcontainer>
    </Fragment>
  );
};

export default Dashboard;
