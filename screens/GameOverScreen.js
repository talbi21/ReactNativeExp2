import React from "react";
import { View,Text,StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";


const GameOverScreen = props =>{
    return(
        <Card style={styles.confirmedContainer}>
            
 
    
 <Text>The Game is Over!</Text>
 <Text>Number of Rounds : {props.numbRounds}</Text>
 <Text>Number was : {props.userNumber}</Text>
 <View style={styles.buttonCon}>
 <Button title="New Game" color={colors.accent} onPress={props.onRestart}/>
 </View>

</Card>
    );

};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    confirmedContainer:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonCon:{
        margin:25,
    }
});

export default GameOverScreen;