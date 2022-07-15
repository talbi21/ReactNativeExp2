import React,{useState} from "react";
import { View, Text, StyleSheet, Button,TouchableWithoutFeedback,Keyboard, Alert } from 'react-native';
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = props => {

    const [enteredValue,setEntretedValue]= useState('');
    const [confirmed,setConfirmed]= useState(false);
    const [selectedNumber,setSelectedNumber]= useState();

    const numberInputHandler = inputText => {
        setEntretedValue(inputText.replace(/[^0-9]/g,''))
    };

    const resetInputHandler = () => {
       setEntretedValue('');
       setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN (chosenNumber)  || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number','Put Numer between 1 and 99.', [{text:'OK', style:'destructive',onPress : resetInputHandler}]
            );
            return;
            
        }
        console.log("Chosen Number",chosenNumber)
        setConfirmed(true);
        setEntretedValue('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
     };

     let confirmedOutPut;
     if (confirmed) {
        confirmedOutPut =
        <Card style={styles.confirmedContainer}>
            <Text>You Selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME" onPress={()=>props.onStartGame(selectedNumber)}/>
            
        </Card>
        
     }

    return (
        <TouchableWithoutFeedback onPress={()=>{
           Keyboard.dismiss(); 
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>

                <Input
                    style={styles.input}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />

                <View style={styles.ButtonContainer}>

                    <View style={styles.button}><Button title="Reset" color={colors.accent} onPress={resetInputHandler} /></View>
                    <View style={styles.button}><Button title="Confirm" color={colors.primary} onPress={confirmInputHandler} /></View>
                </View>
            </Card>

            {confirmedOutPut}


        </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },
    ButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    confirmedContainer:{
        marginTop:20,
        alignItems:'center'
    }



});

export default StartGameScreen;