import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import colors from "../constants/colors";


const NumberContainer = props => {
    return (
        <View style={styles.numCon}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    numCon: {
        borderWidth:2,
        borderColor: colors.accent,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center'
    },
    number:{
        color: colors.accent,
        fontSize:20,
    }

});

export default NumberContainer;