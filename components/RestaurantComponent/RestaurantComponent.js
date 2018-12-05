import React from 'react';
import PropTypes from 'prop-types';

import ListOfFood from '../ListOfFood/ListOfFood';
import FoodGrafics from '../FoodGrafics/FoodGrafics';
import Table from '../Table/Table';
import { NavLink, withRouter } from 'react-router-dom';

import './RestaurantComponent.css';

class intRestaurantComponent extends React.PureComponent {

  static propTypes = {
    // products: PropTypes.object,
  };

  render() {
    return(
      <div className = {"RestaurantComponent"}>
        <div className = {"LinksBlock"}>
          <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
             <span className="backgroundMain"><img className="PageLink" src = {"/./img/logo/MAINW.png"}/></span>
          </NavLink>
          <NavLink to="/restaurantMC/mcdonalds" className="PageLink" activeClassName="ActivePageLinkMc">
            <span className="backgroundMC"><img className="PageLink" src = {"/./img/logo/MCLOGOW.png"}/></span>
          </NavLink>
          <NavLink to="/restaurantBK/burgerking" className="PageLink" activeClassName="ActivePageLinkBk">
              <span className="backgroundBK"><img className="PageLink" src = {"/./img/logo/BKLOGOB.png"}/></span>
          </NavLink>
         </div>
          <ListOfFood nameOfRestaurant = {this.props.match.params.nameOfRestaurant}/>
          <Table nameOfRestaurant = {this.props.match.params.nameOfRestaurant}/>
          <FoodGrafics nameOfRestaurant = {this.props.match.params.nameOfRestaurant}/>
      </div>
    );
  }
}

const RestaurantComponent = withRouter(intRestaurantComponent);

export default RestaurantComponent;
