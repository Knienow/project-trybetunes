import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';
import getMusics from '../services/musicsAPI';
// O arquivo musicsAPI.js contém a função getMusics que faz uma requisição a uma API
// e retorna os as músicas de um álbum. Ela recebe como parâmetro uma string, que deve
// ser o id do álbum. O retorno dessa função, quando encontra as informações,
// é um array onde o primeiro elemento é um objeto com informações do álbum
// e o restante dos elementos são as músicas do álbum.
// Atenção: caso não encontre nenhuma informação, a API retornará um array vazio.

class Album extends React.Component {
  state = {
    album: {},
    albumList: [],
    loading: false,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const returnAPI = await getMusics(id);
    const album = returnAPI[0];
    const albumList = returnAPI.filter((elem) => elem.kind === 'song');

    this.availableAlbuns(albumList, album);
  }

  availableAlbuns = (albumList, album) => {
    this.setState({
      albumList,
      album,
    });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate', this.state, nextState);
  //   return true;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate', this.state, prevState);
  // }

  render() {
    const { album, albumList, loading } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {loading ? <Loading /> : (
          <>
            <div>
              {album && (
                <div>
                  <h1 data-testid="artist-name">
                    { album.artistName}
                  </h1>
                  <h2 data-testid="album-name">
                    {album.collectionName}
                  </h2>
                </div>
              )}
            </div>
            <div>
              {albumList.map((music) => (
                <MusicCard
                  key={ music.trackName }
                  music={ music }
                />
              ))}
            </div>
          </>
        )}
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
