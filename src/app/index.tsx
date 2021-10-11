import React, { useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import "./index.css";


import PersonalizationTester from "pages";
import { configMindbox } from "shared/config";

declare global {
  interface Window {
    mindbox: any;
  }
}

function App() {
  useEffect(() => {
    configMindbox();
  }, []);

  return (
    <div className="App">
      <PersonalizationTester />
    </div>
  );
}

export default App;
