import React from 'react';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
// O arquivo musicsAPI.js contém a função getMusics que faz uma requisição a uma API
// e retorna os as músicas de um álbum. Ela recebe como parâmetro uma string, que deve
// ser o id do álbum. O retorno dessa função, quando encontra as informações,
// é um array onde o primeiro elemento é um objeto com informações do álbum
// e o restante dos elementos são as músicas do álbum.
// Atenção: caso não encontre nenhuma informação, a API retornará um array vazio.

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
      <div data-testid="page-album">
        <Header />
        {getMusics}
      </div>
    );
  }
}

export default Album;
