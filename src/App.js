// TrybeTunes: reproduzir músicas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.
// Fazer login - Login;
// Pesquisar por uma banda ou artista - Search;
// Listar os álbuns disponíveis dessa banda ou artista - Album + Seacrh;
// Visualizar as músicas de um álbum selecionado - Album;
// Reproduzir uma prévia das músicas deste álbum - Album;
// Favoritar e desfavoritar músicas - Favorite;
// Ver a lista de músicas favoritas - Favorite;
// Ver o perfil da pessoa logada - Profile;
// Editar o perfil da pessoa logada - ProfileEdit;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // userName: '',
      // buttonDisabled: true,
    };
  }

  render() {
    // const { userName, history, buttonDisabled } = this.props;
    // const { isLoading } = this.state;
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/album/:id" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route path="/search" component={ Search } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
