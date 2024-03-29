import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
// O arquivo musicsAPI.js contém a função getMusics que faz uma requisição a uma API
// e retorna as músicas de um álbum. Ela recebe como parâmetro uma string, que deve
// ser o id do álbum. O retorno dessa função, quando encontra as informações,
// é um array onde o primeiro elemento é um objeto com informações do álbum
// e o restante dos elementos são as músicas do álbum.
// Atenção: caso não encontre nenhuma informação, a API retornará um array vazio.

class Album extends React.Component {
  state = {
    dataAlbum: [],
    musics: [],
    favoritesList: [],
    loadingMusic: false,
    loadingFavorites: true,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    getMusics(id).then((response) => {
      const dataAlbum = response[0];
      const musics = response.slice(1);
      // console.log('response', dataAlbum, musics);
      this.setState({
        dataAlbum,
        musics,
      });
    }).then(() => getFavoriteSongs()).then((response) => {
      this.setState({
        favoritesList: response,
        loadingFavorites: false,
      });
    });
  }

  changeLoadingState = (loadingMusic) => {
    this.setState({
      loadingMusic,
    });
  };

  render() {
    const {
      dataAlbum,
      musics,
      loadingMusic,
      favoritesList,
      loadingFavorites,
    } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {loadingMusic && <Loading /> }
        <div>
          <h1 data-testid="artist-name">
            { dataAlbum.artistName}
          </h1>
          <h2 data-testid="album-name">
            {dataAlbum.collectionName}
          </h2>
          { musics.map((music) => {
            if (music && !loadingFavorites) {
              return (<MusicCard
                key={ music.trackId }
                isLoading={ this.changeLoadingState }
                music={ music }
                checked={ !!favoritesList.find(
                  (element) => element.trackId === music.trackId,
                ) }
              />);
            }
            return false;
          })}
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

};

export default Album;
