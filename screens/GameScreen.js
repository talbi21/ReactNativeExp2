import React,{useState,useRef,useEffect} from "react";
import { View,StyleSheet,Text, Button,Alert} from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomBetween = (min,max,exclude) =>{


    console.log('generate1',exclude,rndNum);

    min = Math.ceil(min);
    max = Math.floor(max);
    

    var rndNum = Math.floor(Math.random() * (max-min))+min;
    if (parseInt(rndNum) === exclude) {
        console.log('generate2',exclude,rndNum);
        return generateRandomBetween(min, max, exclude);
    }else{
        console.log('generate3',exclude,rndNum);
        return rndNum;
    }

};

const GameScreen = props =>{
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1,100, props.userChoice)
        );
        const [rounds, setRounds] = useState(0);
        const currentLow = useRef(1);
        const currentHight = useRef(100);

        const{userChoice,onGameOver}=props;

        useEffect(()=>{
            if (currentGuess === userChoice) {
                onGameOver(rounds);
            }
        },
        [currentGuess,userChoice]);
        console.log('useREf',currentLow,currentHight);



        const nextGuessHandler = direction =>{

            console.log('Guess',direction,props.userChoice)

        if (direction === 'lower' && currentGuess < props.userChoice || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('suriously?!','come on man!', [{text:'Sorry', style:'cancel'}]);
            return;
            
        }
    
        
        if (direction === 'lower') {
           currentHight.current= currentGuess;
           console.log('useREf',currentLow,currentHight);
        }else{
            currentLow.current= currentGuess;
            console.log('useREf',currentLow,currentHight);
        }

   
        const nextNumber =generateRandomBetween(currentLow.current,currentHight.current,currentGuess);
        setCurrentGuess(nextNumber);
        console.log('useREfex',currentLow,currentHight);
        console.log('CurrentGuess',nextNumber);
        setRounds(curRounds => curRounds + 1);

        };
       

        return(
            <View style={styles.screen}>
                <Text>Opponent's guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card style={styles.buttonC}>
                    <Button title="LOWER" onPress={/*()=>{}*/nextGuessHandler.bind(this,'lower')}/>
                    <Button title="GREATER" onPress={/*()=>{}*/nextGuessHandler.bind(this,'greater')}/>
                </Card>

            </View>
        );




};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonC:{
        flexDirection:'row',
        justifyContent: 'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%'
    }
});

export default GameScreen;