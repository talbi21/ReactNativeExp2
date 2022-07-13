import React,{useState} from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = props => {

    const [enteredValue,setEntretedValue]= useState('');

    const numberInputHandler = inputText => {};

    return (
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

                    <View style={styles.button}><Button title="Reset" color={colors.accent} onPress={() => { }} /></View>
                    <View style={styles.button}><Button title="Confirm" color={colors.primary} onPress={() => { }} /></View>
                </View>
            </Card>


        </View>
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
    }



});

export default StartGameScreen;