import React from 'react';

class Album extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log('construtor');
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
      <div data-testid="page-album">conteúdo</div>
    );
  }
}

export default Album;
