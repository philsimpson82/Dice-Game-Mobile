import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, ToastAndroid } from 'react-native';
import { Icon, Button, Badge } from '@rneui/themed';
import GameControls from './components/GameControls';
import GameDisplay from './components/GameDisplay';
import Header from './components/Header';

export default function App() {
  const [startGame, setStartGame] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  let [currentScore, setCurrentScore] = useState(0);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [dieFace, setDieFace] = useState(7);
  const [gameWinner, setGameWinner] = useState(false);

  function newGame () {
    setStartGame(true);
    setGameWinner(false);
    setCurrentPlayer(1);
    setCurrentScore(0);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setDieFace(7);
  }

  function rollCalculator () {
    let rollValue = Math.floor((Math.random() * 6) + 1);
    setDieFace(rollValue);
    setCurrentScore(currentScore += rollValue);
    
    if (currentScore > 21 ) {
      setCurrentScore(0);
      currentPlayer === 1 ? setCurrentPlayer(2) : setCurrentPlayer(1);
    }
  }

  function endTurn () {
    if (currentPlayer === 1) {
      setPlayerOneScore(playerOneScore + currentScore);
      if ((playerOneScore + currentScore) >= 100) {
        setGameWinner(true);
        setCurrentPlayer(1);
      } else {
        setCurrentPlayer(2);
        setCurrentScore(0);
        setDieFace(7);
      }
    } else {
      setPlayerTwoScore(playerTwoScore + currentScore);
      if ((playerTwoScore + currentScore) >= 100) {
        setGameWinner(true);
        setCurrentPlayer(2);
      } else {
        setCurrentPlayer(1);
        setCurrentScore(0);
        setDieFace(7);
      }
    }
  }

  function resetGame () {
    setCurrentPlayer(1);
    setCurrentScore(0);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setDieFace(7);
    setStartGame(false);
    setGameWinner(false);
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Header
          playerOneScore={playerOneScore} 
          playerTwoScore={playerTwoScore}
        />
      </View>
      <View style={{ flex: 3 }}>
        <GameDisplay 
          startGame={startGame} 
          gameWinner={gameWinner} 
          currentPlayer={currentPlayer} 
          currentScore={currentScore} 
          dieFace={dieFace}
        />
      </View>
      <View style={{ flex: 2 }}>
        <GameControls 
          startGame={startGame} 
          rollCalculator={rollCalculator} 
          newGame={newGame} 
          endTurn={endTurn} 
          resetGame={resetGame} 
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#35654d',
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
  },
});
