import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import Button from "../../UI/Button";
import { getFormattedDate } from "../../utils/date";

const ExpenseForm = ({cancelHandler, isEditing, onSubmit, defaultValue}) => {
  const [inputValue, setInputValue] = useState({
    amount: defaultValue ? defaultValue.amount.toString() : '',
    date: defaultValue ? getFormattedDate(defaultValue.date): '',
    description: defaultValue? defaultValue.description: ''
  });
  const inputChangeHandler = (inputId, enteredValue) => {
    setInputValue((currentValue) => {
        
      return {
        ...currentValue,
        [inputId]: enteredValue,
      };
    });
  };
  const submitHandler = () => {
    const expense = {
        amount : +inputValue.amount,
        date: new Date(inputValue.date),
        description: inputValue.description
    }
    onSubmit(expense)

    
  }
  
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRows}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValue.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValue.date,
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValue.description,
        }}
      />
      <View style={styles.buttonContainer} >
        <Button mode='flat' onPress={cancelHandler} style={styles.button} >Cancel</Button>
        <Button onPress={submitHandler} style={styles.button} >{isEditing ? 'Update' : 'Add'}</Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    marginVertical: 16,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  inputRows: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  button:{
    minWidth:120,
    marginHorizontal:8
  }
});
