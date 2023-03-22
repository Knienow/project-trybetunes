import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div style={ { background: 'red' } }>
        <p>Carregando...</p>
      </div>
    );
  }
}

export default Loading;
