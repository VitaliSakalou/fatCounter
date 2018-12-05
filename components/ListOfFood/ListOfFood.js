import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { check_Product, changeCount_Product } from "./ListOfFoodAction";
import ItemFood from "./itemFood/itemFood";
import ModalWindow from "../ModalWindow/ModalWindow";

import "./ListOfFoodCSS.css";

class intListOfFood extends React.PureComponent {
  static propTypes = {
    products: PropTypes.object,
    nameOfRestaurant: PropTypes.string
  };

  state = {
    string: ""
  };

  checkProduct = e => {
    let url = this.props.nameOfRestaurant;
    this.props.dispatch(check_Product(e.currentTarget.dataset.identifier, url));
  };

  plusProduct = e => {
    let url = this.props.nameOfRestaurant;
    e.stopPropagation();
    this.props.dispatch(
      changeCount_Product(e.currentTarget.dataset.identifier, 1, url)
    );
  };

  minusProduct = e => {
    let url = this.props.nameOfRestaurant;
    e.stopPropagation();
    let arr = null;
    switch (url) {
      case "mcdonalds":
        arr = this.props.products.mcdonalds;
        break;
      case "burgerking":
        arr = this.props.products.burgerking;
        break;
      default:
        alert("неизвестная страница");
    }
    if (arr[e.currentTarget.dataset.identifier - 1].count == 0) {
      return false;
    } else {
      this.props.dispatch(
        changeCount_Product(e.currentTarget.dataset.identifier, -1, url)
      );
    }
  };

  searchFood = e => {
    this.setState({ string: e.target.value.toLowerCase() });
  };

  arrDefinder = () => {
    let url = this.props.nameOfRestaurant;
    let arr = null;
    switch (url) {
      case "mcdonalds":
        arr = this.props.products.mcdonalds;
        break;
      case "burgerking":
        arr = this.props.products.burgerking;
        break;
      default:
        alert("неизвестная страница");
    }
    return { arr, url };
  };

  render() {
    let arr = this.arrDefinder();
    let list = (
      <div className="listBlock">
        {arr.arr.some((item, index) => {
          if (item.modal) {
            return true;
          }
        }) && <ModalWindow nameOfRestaurant={arr.url} />}
        <input
          className={"input"}
          type={"text"}
          onChange={this.searchFood}
          placeholder="Seach..."
        />
        <ul
          className="list rounded"
          style={{ height: document.documentElement.clientHeight - 100 - 54 }}
        >
          {arr.arr
            .filter(V => V.name.toLowerCase().indexOf(this.state.string) > -1)
            .map(V => {
              let checked = "";
              let visible = "";
              if (V.checked) {
                checked = "checked";
                visible = "_visible";
              }
              return (
                <ItemFood
                  key={V.code}
                  checked={checked}
                  visible={visible}
                  code={V.code}
                  data_identifier={V.code}
                  name={V.name}
                  cbcheckProduct={this.checkProduct}
                  src={V.img}
                  cbminusProduct={this.minusProduct}
                  cbplusProduct={this.plusProduct}
                />
              );
            })}
        </ul>
      </div>
    );
    return list;
  }
}

const mapStateToProps = function(state) {
  return {
    products: state.Product
  };
};

const ListOfFood = connect(mapStateToProps)(intListOfFood);

export default ListOfFood;
