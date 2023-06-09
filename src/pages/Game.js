import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Questions from '../components/Questions';
import '../styles/Game.css';

class Game extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="container-game">

        <Header />
        <Questions history={ history } />
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Game;
