import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./views1/HomePage";
import CompanyPage from "./views1/CompanyPage";
import Candidates from "./views1/Candidates";
import EditCandidatePage from "./views1/EditCandidatePage";
import NaviBar from "./components/NaviBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NaviBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/companypage" exact component={CompanyPage} />
        <Route path="/candidates" exact component={Candidates} />
        <Route path="/candidates/:id" exact component={EditCandidatePage} />
      </Router>
    </div>
  );
}

export default App;
