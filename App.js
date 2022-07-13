
import { Button, StyleSheet, Text, View } from 'react-native';
import{useState}from 'react';
import Header from './components/Header'
import StartGameScreen  from './screens/StartGameScreen';

export default function App() {
 
  return (
    <View style={styles.screen}>
     <Header title="Gess a Number "/>
     <StartGameScreen></StartGameScreen>
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
  flex:1
 }
});
