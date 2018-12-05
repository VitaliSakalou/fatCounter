import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Grafics from "./Grafics/Grafics";

import Highcharts from "highcharts";
import ReactHighcharts from "react-highcharts";
import highcharts3d from "highcharts-3d";
highcharts3d(ReactHighcharts.Highcharts);

import "./FoodGrafics.css";

class intFoodGrafics extends React.PureComponent {
  static propTypes = {
    products: PropTypes.object,
    nameOfRestaurant: PropTypes.string
  };

  getElementWidth = () => {
    let width = null;
    if (document.documentElement.clientWidth > 768) {
      width = document.documentElement.clientWidth - 400;
    } else {
      width = document.documentElement.clientWidth;
    }
    let height = null;
    height =
      document.documentElement.clientHeight -
      0.4 * document.documentElement.clientHeight -
      100;
    return width, height;
  };

  getElementHeight = () => {
    let height = null;
    height =
      document.documentElement.clientHeight -
      0.4 * document.documentElement.clientHeight -
      100;
    return height;
  };

  warning = ccal => {
    let warning = "";
    if (ccal > 2000) {
      warning = "warning";
    }
    return warning;
  };

  arrayDefinder = () => {
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
    return arr;
  };

  dataCounting = () => {
    let arr = this.arrayDefinder();
    let calories = 0;
    let proteins = 0;
    let fats = 0;
    let carbohydrates = 0;
    arr.map((item, index) => {
      if (item.checked) {
        calories =
          Math.round((calories + item.calories * item.count) * 100) / 100;
        proteins =
          Math.round((proteins + item.proteins * item.count) * 100) / 100;
        fats = Math.round((fats + item.fats * item.count) * 100) / 100;
        carbohydrates =
          Math.round((carbohydrates + item.carbohydrates * item.count) * 100) /
          100;
      }
    });
    return [calories, proteins, fats, carbohydrates];
  };

  highChartsBuilder = (calories, proteins, fats, carbohydrates) => {
    return {
      chart: {
        backgroundColor: "#590d0e",
        color: "#e86604",
        type: "column",
        height:
          document.documentElement.clientHeight -
          0.4 * document.documentElement.clientHeight -
          140,
        options3d: {
          enabled: true,
          alpha: 5,
          beta: 10,
          depth: 40
        }
      },
      title: {
        text: "Nutritional value of the product",
        style: {
          color: "white",
          fontSize: "30px",
          "font-family": "Caveat Brush, cursive"
        }
      },
      subtitle: {
        text: "Total calories, proteins, fats and carbohydrates",
        style: {
          color: "white",
          fontSize: "18px",
          "font-family": "Caveat Brush, cursive"
        }
      },
      plotOptions: {
        column: {
          depth: 150,
          color: "#267C7F"
        }
      },
      responsive: {
        rules: {
          condition: {
            callback: this.getElementWidth()
          }
        }
      },
      xAxis: {
        categories: ["Calories", "Protein", "Fat", "Carbohydrates"],
        labels: {
          skew3d: true,
          style: {
            fontSize: "24px",
            color: "white",
            fontFamily: "Caveat Brush, cursive"
          }
        }
      },
      yAxis: {
        title: {
          text: null
        },
        labels: {
          skew3d: true,
          style: {
            fontSize: "24px",
            color: "white",
            fontFamily: "Caveat Brush, cursive"
          }
        }
      },
      series: [
        {
          animation: false,
          data: [calories, proteins, fats, carbohydrates]
        }
      ]
    };
  };

  render() {
    let objectOfDatas = this.dataCounting();
    let g_config = this.highChartsBuilder(...objectOfDatas);

    let grafics = (
      <div className={"graficsBlockMain"}>
        <div className={"graficsValue"}>
          <span className={this.warning(objectOfDatas[0])}>
            Calories - {objectOfDatas[0]} ccal
          </span>
          <span>Protein - {objectOfDatas[1]} g</span>
          <span>Fat - {objectOfDatas[2]} g</span>
          <span>Carbohydrates - {objectOfDatas[3]} g</span>
        </div>
        <div id="containerHightCharts">
          <ReactHighcharts config={g_config} />
        </div>
      </div>
    );
    return grafics;
  }
}

const mapStateToProps = function(state) {
  return {
    products: state.Product
  };
};

const FoodGrafics = connect(mapStateToProps)(intFoodGrafics);

export default FoodGrafics;
