import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { default as isoFetch } from "isomorphic-fetch";
import { GridLoader } from "halogenium";

import "./PagesLinks.css";
import { data_Request } from "../components/ListOfFood/ListOfFoodAction";

import Routing from "./Routing";

class intPagesRouter extends React.PureComponent {
  static propTypes = {
    products: PropTypes.object
  };

  componentDidMount = () => {
    let fetchError = errorMessage => {
      let initState = require("../Foods.json");
      this.props.dispatch(data_Request(initState));
      console.error(errorMessage);
    };

    let fetchSuccess = loadedData => {
      console.log("load", loadedData);
      this.props.dispatch(data_Request(loadedData));
    };

    let loadData = () => {
      isoFetch("https://api.myjson.com/bins/ijqja", {
        method: "get",
        headers: {
          Accept: "application/json"
        }
      })
        .then(response => {
          if (!response.ok) {
            let Err = new Error("fetch error " + response.status);
            Err.userMessage = "Ошибка связи";
            throw Err;
          } else return response.json();
        })
        .then(data => {
          try {
            fetchSuccess(data);
          } catch (error) {
            fetchError(error.message);
          }
        })
        .catch(error => {
          console.log(error.message);
          fetchError(error.userMessage || error.message);
        });
    };
    loadData();
  };

  state = {};

  render() {
    if (this.props.products.data === false) {
      return (
        <div className={"Loader"}>
          <div className={"LoaderItem"}>
            <GridLoader color="gold" size="50px" margin="5px" />
          </div>
        </div>
      );
    }
    return <Routing />;
  }
}
const mapStateToProps = function(state) {
  return {
    products: state.Product
  };
};

// https://github.com/ReactTraining/react-router/issues/4671
const PagesRouter = withRouter(connect(mapStateToProps)(intPagesRouter));

export default PagesRouter;
