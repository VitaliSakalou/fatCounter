"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import thunk from 'redux-thunk';

import combinedReducer from './core/reducers.js';

import { composeWithDevTools } from 'redux-devtools-extension';

require ('es6-promise').polyfill();

import PagesRouter from './pages/PagesRouter';
import Main from './pages/Main';

  let store=createStore(
    combinedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
          <PagesRouter/>
      </BrowserRouter>
    </Provider>
    , document.getElementById('container') 
  );