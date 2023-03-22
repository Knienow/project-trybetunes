import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

// crie um componente chamado MusicCard que deverá exibir o nome da música
// (propriedade trackName no objeto recebido pela API) e um player para tocar o
// preview da música (propriedade previewUrl no objeto recebido pela API).

class MusicCard extends React.Component {
  addToListOfFavorite = async (event) => {
    const { music, isLoading } = this.props;
    const { checked } = event.target;
    if (checked) {
      isLoading(true);
      return addSong(music).then(() => {
        isLoading(false);
      });
    }
    await removeSong(music);
  };

  // musicSaved = async () => {
  //   const songsList = await getFavoriteSongs();
  //   const isSavedMusic = songsList.map((music) => music.trackId);
  //   this.setState({
  //     checked: isSavedMusic,
  //   });
  //   this.addToListOfFavorite();
  // };

  render() {
    const { music: { trackId, trackName, previewUrl }, checked } = this.props;
    return (
      <div>
        <div key={ trackId }>
          <p>{trackName}</p>
          <audio
            data-testid="audio-component"
            src={ previewUrl }
            controls
          >
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>
          <label htmlFor={ `inputFavorite-${trackId}` }>
            Favorita
            {' '}

          </label>
          <input
            data-testid={ `checkbox-music-${trackId}` }
            id={ `inputFavorite-${trackId}` }
            name="inputFavorite"
            type="checkbox"
            checked={ checked }
            value={ trackId }
            onClick={ this.addToListOfFavorite }
          />
        </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  musics: PropTypes.arrayOf({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  }).isRequired,
  favoritesList: PropTypes.arrayOf({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  }).isRequired,
}.isRequired;

export default MusicCard;
