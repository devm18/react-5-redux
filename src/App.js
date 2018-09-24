import React, { Component } from 'react';
import './App.css';
import router from './router'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; 
import store from './store';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter> 
          <div>
            { router }
          </div> 
        </BrowserRouter> 
      </Provider>
    );
  }
}

export default App;

