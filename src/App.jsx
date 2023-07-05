import React from "react";
import "./App.css";
import TopBar from "./Components/TopBar";
import SideBar from "./Components/SideBar";
import IdProvider from "./Providers/IdProvider";
import WriteAreaContainer from "./Components/WriteAreaContainer";

function App() {
  return (
    <div className="h-full">
      <TopBar />

      <div className="flex">
        <IdProvider>
          <SideBar />
          <WriteAreaContainer />
        </IdProvider>
      </div>
    </div>
  );
}

export default App;
