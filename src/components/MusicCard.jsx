import React from 'react';
import PropTypes from 'prop-types';
// crie um componente chamado MusicCard que deverá exibir o nome da música
// (propriedade trackName no objeto recebido pela API) e um player para tocar o
// preview da música (propriedade previewUrl no objeto recebido pela API).

class MusicCard extends React.Component {
  render() {
    const { music } = this.props;
    return (
      <>
        <p>
          {music.trackName}
        </p>
        <audio
          data-testid="audio-component"
          src={ music.previewUrl }
          controls
        >
          <track kind="captions" />
        </audio>
      </>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default MusicCard;
