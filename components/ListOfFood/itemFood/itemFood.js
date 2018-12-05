import React from "react";
import PropTypes from "prop-types";
// import {connect} from 'react-redux';
// import { check_Product, changeCount_Product } from '../ListOfFoodAction';

class ItemFood extends React.PureComponent {
  static propTypes = {
    checked: PropTypes.string,
    visible: PropTypes.string,
    code: PropTypes.number,
    data_identifier: PropTypes.number,
    name: PropTypes.string,
    cbcheckProduct: PropTypes.func,
    cbminusProduct: PropTypes.func,
    cbplusProduct: PropTypes.func,
    src: PropTypes.string,
    data_identifier: PropTypes.number
  };

  checkProduct = e => {
    this.props.cbcheckProduct(e);
  };
  minusProduct = e => {
    this.props.cbminusProduct(e);
  };
  plusProduct = e => {
    this.props.cbplusProduct(e);
  };

  render() {
    //  console.log("render", this.props.code);
    return (
      <li
        className={"item " + this.props.checked}
        key={this.props.code}
        onClick={this.checkProduct}
        data-identifier={this.props.data_identifier}
      >
        <img
          className={"imageInList"}
          src={"/./img/" + this.props.src + ".png"}
        />
        <span className={"itemNameOfProduct"}>{this.props.name}</span>
        <span className={"btn" + this.props.visible}>
          <button
            className={"btnBody"}
            data-identifier={this.props.data_identifier}
            onClick={this.minusProduct}
          >
            -
          </button>
          <button
            className={"btnBody"}
            data-identifier={this.props.data_identifier}
            onClick={this.plusProduct}
          >
            +
          </button>
        </span>
      </li>
    );
  }
}

export default ItemFood;
