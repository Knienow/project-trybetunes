import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

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
      artistForm: '',
      artistName: '',
      artistAlbum: [],
      existingAlbum: true,
      buttonSearch: true,
      loading: false,
    };
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => this.buttonSearchDisabled(this.state),
    );
  };

  buttonSearchDisabled = () => {
    const { artistForm } = this.state;
    const minLength = 2;

    if (artistForm.length < minLength) {
      return this.setState({ buttonSearch: true });
    }
    this.setState({ buttonSearch: false });
  };

  searchArtist = async () => {
    const { artistForm } = this.state;
    this.setState({
      loading: true,
      artistForm: '',
      artistName: artistForm, // Primeiro parâmetro da setState()!
    }, async () => {
      const searchAlbum = await searchAlbumsAPI(artistForm);
      const album = searchAlbum.length > 0;
      this.setState({
        loading: false,
        artistAlbum: searchAlbum,
        existingAlbum: album,
      });
      // const { history } = this.props;
      // history.push('/album/:id');
    });
  };

  render() {
    const {
      artistForm,
      artistName,
      artistAlbum,
      existingAlbum,
      buttonSearch,
      loading,
    } = this.state;
    // const { history } = this.props;
    // const { location } = history;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="artistForm">
            <input
              data-testid="search-artist-input"
              name="artistForm"
              type="text"
              value={ artistForm }
              onChange={ this.onInputChange }
            />
          </label>
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ buttonSearch }
            onClick={ this.searchArtist }
          >
            Pesquisar

          </button>
        </form>

        { loading ? <Loading /> : (
          <div>
            {artistAlbum.length > 0 && (
              <>
                <h1>
                  Resultado de álbuns de:
                  {' '}
                  { artistName }
                </h1>
                <div>
                  { artistAlbum.map(({ collectionId, collectionName }) => (
                    <Link
                      to={ `/album/${collectionId}` }
                      key={ collectionId }
                      data-testid={ `link-to-album-${collectionId}` }
                    >
                      {collectionName}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
        <div>
          {!existingAlbum && <p>Nenhum álbum foi encontrado</p>}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default Search;
