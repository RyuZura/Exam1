import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ChemicalApp from './components/ChemicalApp';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Provider store={store}>
    <ChemicalApp />
  </Provider>,
  document.getElementById('root')
);
