import React from "react";
import {Switch, Route} from "react-router-dom";

import './app.sass';

import {Header} from "../../components/header/header";
import {Footer} from "../../components/Footer/footer";
import {Dots} from "../../components/dots/dots";
import AboutUs from '../about-us'
import PCRental from '../pc-rental'
import Tournaments from '../tournaments'
import Contacts from '../contacts'


const App: React.FC = () => {
  return (
      <div className="app">
          <Header/>

          <div className="content">
              <Dots/>
              <Switch>
                  <Route path="/" exact component={AboutUs}/>
                  <Route path="/about" component={PCRental} />
                  <Route path="/tournaments" component={Tournaments} />
                  <Route path="/contacts" component={Contacts} />
              </Switch>
          </div>
          <Footer/>
      </div>
  );
}

export default App;