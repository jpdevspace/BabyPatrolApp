import React, { Component } from "react";

class BabyEventLegend extends Component {
  render = () => {
    const { agoString } = this.props;

    return <span class="bp-fromNowLegend">{agoString}</span>;
  };
}

export default BabyEventLegend;
