import React from 'react';
import { Link } from 'react-router-dom';

class DynamicContainer extends React.Component {
  render() {
    return (
      <div className="jumbotron">
          <h2>Maps:</h2>
          <ul>
              <li><Link to="/design">Value-Streams</Link></li>
          </ul>
      </div>
    );
  }
}

export default DynamicContainer;
