import React from 'react';
import PropTypes from 'prop-types';
import logProps from '../../Hoc/log-props'

// import {connect} from 'react-redux';

class ImgFood extends React.PureComponent {

  static propTypes = {
    src: PropTypes.string,
    count:  PropTypes.number,
    code:  PropTypes.number,
    invisible: PropTypes.string,
    name: PropTypes.string,
    data_identifier: PropTypes.number,
    cbViewModalWindow: PropTypes.func,
  };

  state = {
  
  };

  viewModalWindow = (e) => {
    this.props.cbViewModalWindow(e);
  };

  render() {  
    console.log("render", this.props.name);
    return (
               <span className = {"imageBlock"} onClick={this.viewModalWindow} data-identifier={this.props.data_identifier}>
                  <img className = {"image"} src = {"/./img/"+this.props.src+".png"}/>
                  <span className = {"foodCount_"+this.props.invisible}>
                      <span className = {"x_count_"+this.props.invisible}>x{this.props.count}</span>
                  </span>
                  <span className = {"foodName"}>{this.props.name}</span>
                </span>
     );
  }
}

export default logProps(ImgFood);
