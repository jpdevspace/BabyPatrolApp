import React from "react";

const Home = props => {
  return (
    <div id="bp-landingPageContainer">
      <div id="">


        <div id="bp-landingPage-welcome">
          <p>
            As a parent, keeping track of everything about your baby can be
            overwhelming. With Baby Patrol,
            keeping track of your baby's most important activities, is easy.
          </p>
          <ul>
            <li>
              <span role="img" aria-label="feed">
                🍼
              </span>
              Feeding
            </li>
            <li>
              <span role="img" aria-label="pee">
                💦
              </span>
              Peeing
            </li>
            <li>
              <span role="img" aria-label="poop">
                💩
              </span>
              Pooping
            </li>
            <li>
              <span role="img" aria-label="sleep">
                💤
              </span>
              Sleeping
            </li>
          </ul>
          <p>
            Have the records ready for your next doctor's appointment, or to try to
            find out why your baby is crying.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
