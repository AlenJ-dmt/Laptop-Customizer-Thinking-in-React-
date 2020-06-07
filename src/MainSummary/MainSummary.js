import React from "react";
import Total from '../MainSummary/Total/Total'
import Option from '../MainSummary/Option/Option'

class MainSummary extends React.Component {
  summary = () => {
    return Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];

      return (
          <Option
          key={idx}
          featureHash={featureHash}
          feature={feature}
          name={selectedOption.name}
          cost={selectedOption.cost}
          USCurrencyFormat={this.props.USCurrencyFormat}  
          />
      );
    });
  };

  render() {
    return (
      <div>
        {this.summary()}
        <Total 
        USCurrencyFormat={this.props.USCurrencyFormat}  
        total={this.props.total}
        />
      </div>
    );
  }
}
export default MainSummary;
