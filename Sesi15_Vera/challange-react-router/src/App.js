import './App.css';
import React, {useEffect, useState} from 'react';
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Todos from './components/Todos';

function App() {
  const [login, setlogin] =useState(false);
  console.log(login);
  useEffect(()=> {
    document.title = "Challange React Router"    
  })
  return (
  <BrowserRouter>
    <Header isLogin={login} setlogin={setlogin}/>
    <div className="container">
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/todos">
          <Todos/>
        </Route>
        <Route path="/login">
          <Login onLoginChange={setlogin}/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
