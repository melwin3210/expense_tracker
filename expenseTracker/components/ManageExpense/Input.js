import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, textInputConfig, style, invalid}) => {
    const inputStyle = [styles.input]
    if (textInputConfig && textInputConfig.multiline){
        inputStyle.push(styles.inputMultiline)
    }
  return (
    <View style={[styles.inputContainer, style]} >
      <Text style={[styles.label, invalid && styles.invalidLabel]} >{label}</Text>
      <TextInput style={[inputStyle, invalid && styles.invalidInput]} {...textInputConfig}></TextInput>
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
    inputContainer:{
        marginHorizontal:4,
        marginVertical:8
    },
    label:{
        fontSize:12,
        color: GlobalStyles.colors.primary100,
        marginHorizontal:4
    },
    input:{
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding:6,
        borderRadius:6,
        fontSize:18
    },
    inputMultiline:{
        minHeight:100,
        textAlignVertical:'top',
        maxHeight:300
    },
    invalidLabel:{
        color: GlobalStyles.colors.error500
    },
    invalidInput:{
        backgroundColor: GlobalStyles.colors.error50
    }
})