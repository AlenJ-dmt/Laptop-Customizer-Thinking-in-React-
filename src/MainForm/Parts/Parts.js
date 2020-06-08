import React from "react";
import slugify from "slugify";
import Specs from "../Specs/Specs";

class Parts extends React.Component {
  
  render() {
    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {this.props.features[this.props.feature].map((item, index) => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <Specs
              key={index}
              itemHash={itemHash}
              feature={this.props.feature}
              item={item}
              selected={this.props.selected}
              updateFeature={this.props.updateFeature}
              USCurrencyFormat={this.props.USCurrencyFormat}
            />
          );
        })}
      </fieldset>
    );
  }
}

export default Parts;
