import React from 'react';
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

  users = async () => {
    const getUsers = await getUser();
    const { name } = getUsers;
    this.setState({
      loading: false, userName: name });
  };

  render() {
    const { userName, loading } = this.state;
    return (
      <header data-testid="header-component">
        { loading ? <Loading />
          : (<p data-testid="header-user-name">{ userName }</p>)}
      </header>
    );
  }
}

export default Header;
