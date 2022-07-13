import React from "react";
import { StyleSheet, TextInput } from 'react-native';

const Input = props => {
    return(
        <TextInput {...props} style={{...styles.input, ...props.style}}  />
    );
};
const styles = StyleSheet.create({
    input: {
       // shadowOpacity: 5,
      //  shadowRadius: 3,
       // borderRadius: 5,
      //  elevation: 5,
      //  shadowColor: 'black',
       // width: 100,
       // paddingHorizontal: 10,
       height:30,
        marginVertical:10,
        borderBottomColor:'grey',
        borderBottomWidth:1,
     }

});

export default Input;