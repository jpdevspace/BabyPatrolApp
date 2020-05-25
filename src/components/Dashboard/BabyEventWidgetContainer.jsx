import React from "react";

const BabyEventWidgetContainer = ({children}) => {
  return (
    <div id="bp-eventsWidgetContainer">
      <div id="bp-eventsButtons">
        {children}
      </div>
    </div>);
};

export default BabyEventWidgetContainer;
