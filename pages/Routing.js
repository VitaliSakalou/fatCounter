"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';

import MainPageRestaurant from './MainPage';
import MainPage from './Main';


class intRouting extends React.Component {

  render() {
    return (
          <div>
            <Route exact path="/" component={MainPage}/>
            <Route path="/restaurantMC/:nameOfRestaurant"  component={MainPageRestaurant}/>
            <Route path="/restaurantBK/:nameOfRestaurant"  component={MainPageRestaurant}/>
          </div>
    );

  }

}
const Routing = withRouter(intRouting);
export default Routing;
