import React from "react";
import { Link } from "react-router";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/"> ReduxTagram </Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default App;
