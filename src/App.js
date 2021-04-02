import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Browser, Switch, Route } from "react-router-dom";
import HomeCocktailName from "./pages/HomeCocktailName";
import Ingredient from "./pages/Ingredient";
import Alcohol from "./pages/Alcohol";
import Category from "./pages/Category";
import Favorites from "./pages/Favorites";

import './App.css';

function App() {
  return (
    <Browser>
        <div className="app">
            <Header />
            <Switch>
                <Route exact path="/" component={HomeCocktailName}></Route>
                <Route path="/ingredient" component={Ingredient}></Route>
                <Route path="/category" component={Category}></Route>
                <Route path="/alcohol" component={Alcohol}></Route>
                <Route path="/favorites" component={Favorites}></Route>
            </Switch>
            <Footer />
        </div>
    </Browser>
  );
}

export default App;
