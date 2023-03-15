import React from 'react';
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

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      loginButtonDisabled: true,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    // this.setState({ userName });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', this.state, prevState);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate', this.state, nextState);
  //   return true;
  // }

  validateButton = () => {
    const { userName } = this.state;
    const minLength = 3;

    if (userName.length < minLength) {
      return this.setState({ loginButtonDisabled: true });
    }
    this.setState({ loginButtonDisabled: false });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
    this.validateButton();
  };

  render() {
    const { isLoading } = this.state;
    const loadingElement = <span>Carregando...</span>;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="name-user">
            <input
              data-testid="login-name-input"
              name="name-user"
              min="3"
            />
            Nome:
            { isLoading
              && loadingElement }
          </label>
          <button
            type="button"
            data-testid="login-submit-button"
            //criar uma função assíncrona que mude o estado do isLoading(true) e faça a requisição na API(await createUser) 
            //depois deve redirecionar pra /search
            onClick={ createUser }
            disabled={ this.validateButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
