import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    window.mindbox =
      window.mindbox ||
      function () {
        window.mindbox.queue.push(arguments);
      };
    window.mindbox.queue = window.mindbox.queue || [];
    window.mindbox("create", {
      endpointId: "wpush-test",
    });

    var script = document.createElement("script");
    script.src = "https://api.mindbox.ru/scripts/v1/tracker.js";
    document.getElementsByTagName("head")[0].appendChild(script);

    
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
