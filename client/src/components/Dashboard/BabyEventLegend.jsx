import React, { Component } from "react";

class BabyEventLegend extends Component {
  render = () => {
    const { agoString } = this.props;

    return (
      <span className="bp-fromNowLegend">
        <i class="fas fa-history"></i>
        {agoString}
      </span>
    );
  };
}

export default BabyEventLegend;
