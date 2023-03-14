import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate', this.state, nextState);
  //   return true;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate', this.state, prevState);
  // }

  render() {
    return (
      <div data-testid="page-login">conteúdo</div>
    );
  }
}

export default Login;
