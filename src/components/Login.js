import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  changeEmail(e) {
    this.setState({ email: e.target.value });
  }
  changePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <form
        className="Login"
        onSubmit={(e) => { this.handleSubmit(e) }}
      >
        <label>
          Email
          <input
            type="email"
            value={this.state.email}
            onChange={(e) => { this.changeEmail(e) }}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => { this.changePassword(e) }}
          />
        </label>

        <button>Login</button>
      </form>
    );
  }
};

export default Login;
