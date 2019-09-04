import React from "react";
import { addBabyRecords } from "../../controllers/firebaseDB";

const BabyEventButton = props => {
  const { type, icon, newEvent } = props;

  const handleClick = e => {
    e.preventDefault();
    // TODO JP: Create Firebase function to handle new
    // API.createNewEvent({ type }).then(res => newEvent(type));
    addBabyRecords(type, "no comments yet");
  };

  return (
    <div>
      <button onClick={e => handleClick(e)}>
        <h2>
          <span role="img" aria-label={type}>
            {icon}
          </span>
        </h2>
      </button>
    </div>
  );
};

export default BabyEventButton;
