import React from 'react';
import PropTypes from 'prop-types';
// import API from '../services/userAPI';
import { createUser /* getUser  updateUser */ } from '../services/userAPI';
// Para criar um novo perfil, utilize a função createUser,
// ela recebe como parâmetro o objeto que contém as informações da pessoa usuária
// recuperar as informações da pessoa usuária, utilize a função getUser.
// Ela retornará um objeto com as informações da pessoa logada caso exista.
//  Atenção: caso não encontre nenhuma informação da pessoa usuária, a API retornará um objeto vazio.
// atualizar as informações da pessoa logada, utilize a função updateUser.
// Assim como a função anterior, ela também recebe um objeto com as informações que
// serão atualizadas, esse objeto deve conter a mesma estrutura do anterior.
import Loading from '../components/Loading';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      buttonDisabled: true,
      loading: false,
    };

    this.validateButton = this.validateButton.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
  //   // this.setState({ userName });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', this.state, prevState);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate', this.state, nextState);
  //   return true;
  // }
  onInputChange = (event) => {
    const { value } = event.target;
    this.setState(
      {
        userName: value,
      },
      () => this.loginButtonDisabled(this.state),
    );
  };

  loginButtonDisabled = () => {
    const { userName } = this.state;
    const minLength = 3;

    if (userName.length < minLength) {
      return this.setState({ buttonDisabled: true });
    }
    this.setState({ buttonDisabled: false });
  };

  // criar uma função assíncrona que mude o estado do isLoading(true) e
  // faça a requisição na API(await createUser)
  // depois deve redirecionar pra /search
  async validateButton() {
    this.setState({
      loading: true, // Primeiro parâmetro da setState()!
    }, async () => {
      const { userName } = this.state;
      await createUser({ name: userName });
      this.setState({
        loading: false,
      });
      const { history } = this.props;
      history.push('/search');
    });
  }

  render() {
    // const { userName } = this.props;
    const { userName, buttonDisabled, loading } = this.state;
    return (
      <div data-testid="page-login">
        { loading && <Loading /> }
        <form>
          <label htmlFor="userName">
            Nome:
            <input
              data-testid="login-name-input"
              name="userName"
              type="text"
              value={ userName }
              onChange={ this.onInputChange }
            />
          </label>
          <button
            type="button"
            data-testid="login-submit-button"
            // criar uma função assíncrona que mude o estado do isLoading(true) e faça a requisição na API(await createUser)
            // depois deve redirecionar pra /search
            onClick={ this.validateButton }
            // onClick={ () => history.push('./pages/Search', this.state) }
            disabled={ buttonDisabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default Login;
