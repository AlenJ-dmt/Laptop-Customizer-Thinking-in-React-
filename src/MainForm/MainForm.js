import React from "react";
import Parts from "../MainForm/Parts/Parts";


class MainForm extends React.Component {

  render() {
    return (
      <div>
        {" "}
        {Object.keys(this.props.features).map((feature, idx) => {
          const featureHash = feature + "-" + idx;
          return (
            <Parts
              key={idx}
              featureHash={featureHash}
              feature={feature}
              features={this.props.features}
              selected={this.props.selected}
              updateFeature={this.props.updateFeature}
              USCurrencyFormat={this.props.USCurrencyFormat}
            />
          );
        })}
      </div>
    );
  }
}
export default MainForm;
