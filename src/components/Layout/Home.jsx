import React from "react";

const Home = props => {
  return (
    <div id="bp-landingPageContainer">
      <div id="bp-landingPage-welcome">
        <h1>Welcome!</h1>
      </div>
      <p>
        As a parent, keeping track of everything about your baby can be
        overwhelming. With <strong id="baby-patrol">Baby Patrol</strong> it's
        easy to keep track of some of the most important activities.
      </p>
      <ul>
        <li>
          <span role="img" aria-label="feed">
            🍼
          </span>
          Feed.
        </li>
        <li>
          <span role="img" aria-label="pee">
            💦
          </span>
          Pee.
        </li>
        <li>
          <span role="img" aria-label="poop">
            💩
          </span>
          Poo.
        </li>
        <li>
          <span role="img" aria-label="sleep">
            💤
          </span>
          Sleep.
        </li>
      </ul>
      <p>
        Have the records ready for your next doctor's appointment, or to try to
        find out why your baby is crying
      </p>
    </div>
  );
};

export default Home;
