import React from "react";
import Specs from '../MainForm/Specs/Specs'
import Parts from '../MainForm/Parts/Parts'
import slugify from "slugify";

class MainForm extends React.Component {

  features = () => {
    return(
      Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map((item, index) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <Specs 
          key={index}
          itemHash={itemHash}
          feature={feature}
          item={item}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
          USCurrencyFormat={this.props.USCurrencyFormat}
          />
        );
      });

      return (
        <Parts
        key={idx}
        featureHash={featureHash}
        feature={feature}
        options={options}
        />
      );
    })
    )}

  render() {
    return(
      <div>
        {this.features()}
      </div>
    )
  }
}
export default MainForm;
