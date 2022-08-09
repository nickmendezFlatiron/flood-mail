import { useState, useEffect } from "react";

function App() {

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then(console.log);
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;