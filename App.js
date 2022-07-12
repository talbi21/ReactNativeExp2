
import { Button, StyleSheet, Text, View } from 'react-native';
import{useState}from 'react';
import Header from './components/Header'

export default function App() {
 
  return (
    <View style={styles.screen}>
     <Header title="Gess a Number "/>
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
  flex:1
 }
});
