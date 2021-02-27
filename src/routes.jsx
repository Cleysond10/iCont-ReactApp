import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Counter from './pages/Counter/Counter';
import Bonus from './pages/Bonus/Bonus';

export default function routes() {
  return (
    <BrowserRouter>
      <Navbar title="iCounterasd" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/bonus" component={Bonus} />
      </Switch>
      <Footer>by Cleyson Duarte</Footer>
    </BrowserRouter>
  );
}
