import './App.css';
import {Route, NavLink} from "react-router-dom";
import React from "react";

import AboutUs from './components/about-us'
import PCRental from './components/pc-rental'
import Tournaments from './components/tournaments'
import Contacts from './components/contacts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <il><NavLink to={"/"}>О нас</NavLink></il>
            <il><NavLink to={"/tariffs"}>Тарифы</NavLink></il>
            <il><NavLink to={"/tournaments"}>Турниры</NavLink></il>
            <il><NavLink to={"/contacts"}>Контакты</NavLink></il>
          </ul>
        </nav>

        <Route path="/" exact component={AboutUs} />
        <Route path="/about" component={PCRental} />
        <Route path="/tournaments" component={Tournaments} />
        <Route path="/contacts" component={Contacts} />
      </header>
    </div>
  );
}

export default App;
