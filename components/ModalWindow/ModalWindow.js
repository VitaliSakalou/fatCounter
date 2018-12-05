import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { view_modal_window } from '../ListOfFood/ListOfFoodAction';

import './ModalWindow.css';


class intModalWindow extends React.PureComponent {

    static propTypes = {
      products: PropTypes.object,
      nameOfRestaurant: PropTypes.string,
    };

    state = {

    };

    viewModalWindow = (e) => {
      // let url = window.location.href.split('/')[window.location.href.split('/').length-1].toLowerCase();
      // console.log(e.currentTarget.dataset.identifier);
      // console.log(url);
      this.props.dispatch( view_modal_window(e.currentTarget.dataset.identifier, this.props.nameOfRestaurant) );
    };

    arrDefinder = (url) => {
      // let url = window.location.href.split('/')[window.location.href.split('/').length-1].toLowerCase();
      let arr = null;
      switch ( url ) {
        case 'mcdonalds':
        arr = this.props.products.mcdonalds;
          break;
        case 'burgerking':
        arr = this.props.products.burgerking;
          break;
        default:
          alert('неизвестная страница');
      }
      return arr;
    };

    dataDefinder = (arr) => {
      let classView = '';
      let id = null;
      let src = '';
      let description = '';
      {arr.some((item, index) => {if (item.modal){
          classView = '_view';
          id = item.code;
          src = item.img;
          description = item.description;
          }
          }
        )
      }
      return {classView, id, src, description};
    };

    render() {  
      let arr = this.arrDefinder(this.props.nameOfRestaurant);
      let dataArr = this.dataDefinder(arr);
      return (
      <div className = {"ModalWindow"+dataArr.classView} onClick = {this.viewModalWindow} data-identifier = {dataArr.id}>
        <img className = {'ModalImage'} src = {"/./img/"+dataArr.src+".png"}/>
        <p className = {'ModalDescription'}>{dataArr.description}</p>
      </div>
      )
  }
}

const mapStateToProps = function (state) {
  return {
    // раздел Redux state под именем Product будет доступен
    // данному компоненту как this.props.products
    products: state.Product,
  };
};

const ModalWindow = connect(mapStateToProps)(intModalWindow);

export default ModalWindow;
