import React from "react";

import CardList from "./Components/CardList";

import './App.css'
import ErrorBoundary from "./Components/ErrorBoundary";




const App = () => {
  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <ErrorBoundary>
        <CardList />
      </ErrorBoundary>
    </div>
  );
};

export default App;
