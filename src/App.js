import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Detail from './components/Detail';
import Login from './components/Login';

function App() {
  return (
    <>
    <Router>
        <Header />

        <Switch>
            <Route  path='/home'>
                <Home />
            </Route>
            <Route path='/detail'>
                <Detail />
            </Route>
            <Route exact path='/'>
                <Login />
            </Route>
        </Switch>
    </Router>
    
    </>
  );
}

export default App;
