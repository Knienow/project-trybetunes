import React from 'react';

class NotFound extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div data-testid="page-not-found">
        <h1>Not Found</h1>
      </div>
    );
  }
}

export default NotFound;
