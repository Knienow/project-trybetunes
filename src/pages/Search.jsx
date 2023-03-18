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

    this.state = {
      artist: '',
      buttonSearch: true,
    };
  }

  onInputChange = (event) => {
    const { value } = event.target;
    this.setState(
      {
        artist: value,
      },
      () => this.buttonSearchDisabled(this.state),
    );
  };

  buttonSearchDisabled = () => {
    const { artist } = this.state;
    const minLength = 2;

    if (artist.length < minLength) {
      return this.setState({ buttonSearch: true });
    }
    this.setState({ buttonSearch: false });
  };

  render() {
    const { artist, buttonSearch } = this.state;
    // const { history } = this.props;
    // const { location } = history;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="artistName">
            <input
              data-testid="search-artist-input"
              name="artistName"
              type="text"
              value={ artist }
              onChange={ this.onInputChange }
            />
          </label>
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ buttonSearch }
          >
            Pesquisar

          </button>
        </form>
      </div>
      // { searchAlbum }
    );
  }
}

export default Search;
