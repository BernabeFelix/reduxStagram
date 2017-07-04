import React from "react";
import { Link } from "react-router";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/"> ReduxTagram </Link>
        </h1>
      </div>
    );
  }
}

export default App;
