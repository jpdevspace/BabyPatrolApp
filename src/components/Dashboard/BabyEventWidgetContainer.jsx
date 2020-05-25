import React from "react";

const BabyEventWidgetContainer = ({children}) => {
  return (
    <div id="bp-bodyWrapper">
      <div id="bp-eventsWidgetContainer">{children}</div>
    </div>
  );
};

export default BabyEventWidgetContainer;
