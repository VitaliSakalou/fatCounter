import React from 'react';
import PropTypes from 'prop-types';

import RestaurantComponent from '../RestaurantComponent/RestaurantComponent';
import './MainComponent.css';

class MainComponent extends React.PureComponent {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  render() {

    return (
      <div className="MainComponent">
        <RestaurantComponent/>
      </div>
    );

  }

}

export default MainComponent;
