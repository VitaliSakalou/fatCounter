import React from 'react';
import PropTypes from 'prop-types';


class Grafics extends React.PureComponent {

  static propTypes = {
    height: PropTypes.number,
    value: PropTypes.number,
  };

  render() {  
    // console.log("render", this.props.height);
    let grafics = (
                    <div className = {"grafic"} style={{height: this.props.height}}>{this.props.value}</div>
                  );
    return grafics;
  }
}


export default Grafics;
