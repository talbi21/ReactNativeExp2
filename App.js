
import { Button, StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';
import Header from './components/Header'
import StartGameScreen  from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const NewGameHandler = () =>{
    setGuessRounds(0);
    setUserNumber(null);
  };



  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber);
    console.log('UserNumber',selectedNumber,guessRounds.toString);
  };

  const endGameHandler = (numOfRounds) =>{
    setGuessRounds(numOfRounds);
    console.log('numOfRounds',numOfRounds);
  };



  let content = <StartGameScreen onStartGame={startGameHandler}/>
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={endGameHandler}/>
  }else if (guessRounds > 0) {
    content = <GameOverScreen 
    numbRounds={guessRounds}
     userNumber={userNumber} 
     onRestart={NewGameHandler}/>;
    
  }
 
  return (
    <View style={styles.screen}>
     <Header title="Guess a Number "/>
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
  flex:1
 }
});
