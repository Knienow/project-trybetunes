import React from 'react';
import Header from '../components/Header';
// import searchAlbum from '../services/searchAlbumsAPI';

// O arquivo searchAlbumsAPI.js contém uma função que faz uma requisição a uma API e
// retorna os álbuns de uma banda ou artista. Para essa função funcionar, ela recebe
// como parâmetro uma string, que deve ser o nome da banda ou artista.
// O retorno dessa função, quando encontra as informações, é um array com cada álbum
// dentro de um objeto. Atenção: caso não encontre nenhuma informação da banda ou artista,
// a API retornará um array vazio.

class Search extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    // const { history } = this.props;
    // const { location } = history;
    return (
      <div data-testid="page-search">
        <Header />
        {/* <h1>Boas vindas,</h1>
       <h2>
      //     {
      //       location.state ? location.state.userName : 'Pessoa desconhecida'
      //     }
         </h2> */}
      </div>
      // { searchAlbum }
    );
  }
}

export default Search;
