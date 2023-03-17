import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  state = {
    userName: '',
    loading: true,
  };

  componentDidMount() {
    this.users();
  }

  // getUserElements(user) {
  //   return {
  //     name: `${user.name.first} ${user.name.last}`,
  //     email: user.email,
  //     age: user.dob.age,
  //     image: user.picture.thumbnail,
  //   };
  // }
  users = async () => {
    const { name } = await getUser();
    this.setState({
      loading: false, userName: name });
  };

  render() {
    const { userName, loading } = this.state;
    return (
      <header data-testid="header-component">
        <Link to="/search" data-testid="link-to-search">Buscar</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Músicas Favoritas</Link>
        <Link to="/profile" data-testid="link-to-profile">Meu Perfil</Link>
        { loading ? <Loading />
          : (<p data-testid="header-user-name">{ userName }</p>)}
      </header>
    );
  }
}

export default Header;
