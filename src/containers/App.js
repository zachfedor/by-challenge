import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from '../components/Alert';
import Loading from '../components/Loading';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Settings from '../components/Settings';
import {
  login,
  logout,
  updateSetting,
} from '../actions';
// import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    const { user, settings, loading, error } = this.props;
    const hasSession = !!user;

    return (
      <main className="App">
        <header>
          <h1>Brand Yourself</h1>

          <nav>
            { !hasSession && <a className="active">Login</a>}
            { hasSession && <a className="active">Profile</a>}
            { hasSession && <a onClick={this.props.logout}>Logout</a>}
          </nav>
        </header>

        <section>
          { !hasSession && !loading && (
            <Login login={this.props.login} />
          )}
          { loading && <Loading /> }

          { hasSession && (
            <Profile user={user} />
          )}
          { hasSession && (
            <Settings settings={settings} update={this.props.updateSetting}/>
          )}
        </section>

        <Alert msg={error} />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, settings } = state;
  const { error, loading } = state.ui;

  return {
    user,
    settings,
    error,
    loading,
  };
};

const dispatchActions = {
  login,
  logout,
  updateSetting,
};

export default connect(
  mapStateToProps,
  dispatchActions,
)(App);
