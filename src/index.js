import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Context } from './Context';
import App from './App';
import * as serviceWorker from './serviceWorker';

class TopComponent extends React.Component {
  constructor() {
    super()

    this.onThemeChange = () => {
      this.setState(prevState => ({
        theme: prevState.theme === 'light' ? 'dark' : 'light'
      }))
    }

    this.state = {
      theme: 'light',
      onThemeChange: this.onThemeChange
    }
  }

  render() {
    return(
      <Context.Provider value={this.state}>
        <App />
      </Context.Provider>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <TopComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
