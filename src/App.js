import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// All Components are imported here
import Navbar from "./components/navbar.component";
import BloodBankList from "./components/bloodbank.component";
import BloodBankSearch from "./components/bloodbanksearch.component";
import InfoBloodBank from "./components/infoBloodBank.component";


function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <br/>
            <Route path="/" exact component={BloodBankList} />
            <Route path="/search/:query" component={BloodBankSearch} />
            <Route path="/bloodbankinfo" component={InfoBloodBank} />
          </div>
        </Router>
    </div>
  );
}

export default App;
