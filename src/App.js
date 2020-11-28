import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      {/* Header */}
      <Header />
      {/* App body */}
      <div className="app__body">
        <Sidebar />
        {/* Sidebar (left side)*/}
        <Feed />
        {/* Feed (in the Center) */}
        {/* Widgets (right side)*/}
      </div>
    </div>
  );
}

export default App;
