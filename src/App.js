import React, {useContext} from 'react';
import { Context } from './Context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AskForm from './AskForm';
import TodoApp from './TodoApp';
import './App.css';

// Komponen jam
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
        <span className="clock" >{this.state.date.toLocaleTimeString()}</span>
    );
  }
}

// Komponen utama mengandung React Router
function App() {
  const { theme, onThemeChange } = useContext(Context);

  return (
    <Router>
      <div className="App" style={{
        backgroundColor: theme === 'dark' ? '#282c34' : '#f5f5f5',
        color: theme === 'dark' ? '#f5f5f5' : '#282c34'}} 
        >
        <header className="App-header">
          <div className="nav">
            <Link to="/" className="nav-link" >Home</Link>
            <Link to="/todo" className="nav-link">To-do List</Link>
            <Link to="/ask" className="nav-link">Ask Me</Link>
            <div className="nav-right">
              <li className="nav-link" onClick={onThemeChange}>Change Theme</li>
              <Clock/>
            </div>
          </div>
        </header>

        <Switch>
          <Route path="/todo">
            <TodoApp/>
          </Route>
          <Route path="/ask">
            <AskForm/>
          </Route>
          <Route path="/">
            <div className="home-text">
              <span><strong>Hello</strong><br/>Welcome to my first React App</span>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
