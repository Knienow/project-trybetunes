import React from 'react';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI';
import Header from '../components/Header';
// O arquivo favoriteSongsAPI.js é responsável por manipular as informações das músicas
// favoritas. Nele há as funções getFavoriteSongs, addSong e removeSong, que recuperam,
// adicionam e removem músicas dos favoritos, respectivamente.
// A função getFavoriteSongs retorna um array com as músicas favoritas ou um array vazio,
// caso não haja nenhuma música.
// A função addSong recebe um objeto que representa a música que você quer salvar como
// favorita e adiciona ao array já existente das músicas que já foram favoritadas.
// A função removeSong também recebe um objeto que representa a música que você deseja
// remover da lista de músicas favoritas.
// Atenção: os objetos de música precisam ter a chave trackId para que as músicas
// sejam adicionadas e removidas corretamente.

class Favorites extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        {getFavoriteSongs}
        {addSong}
        {removeSong}
      </div>
    );
  }
}

export default Favorites;
