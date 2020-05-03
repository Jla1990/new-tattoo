
import React, { useState, useEffect } from 'react';
import NavBar from "./homePage/navBar";
import Submissions from "./submissionsPage/submissions";
import Hero from "./homePage/hero";
import SubmissionForm from "./homePage/formsubmission";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div>
    <NavBar />
    <Router>
      <Route exact path="/submit" component={Submissions} />
      <Route
        exact
        path="/"
        component={() => {
          return (
            <React.Fragment>
              <Hero />
              <hr></hr>
              <SubmissionForm />
              <hr></hr>
              
              <p>The current time is {currentTime}.</p>
            </React.Fragment>
          );
        }}
      />
    </Router>
  </div>
  );
}

export default App;

