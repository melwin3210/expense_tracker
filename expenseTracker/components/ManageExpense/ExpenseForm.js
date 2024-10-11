import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import Button from "../../UI/Button";
import { getFormattedDate } from "../../utils/date";
import { GlobalStyles } from "../../constants/styles";

const ExpenseForm = ({ cancelHandler, isEditing, onSubmit, defaultValue }) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValue ? getFormattedDate(defaultValue.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValue ? defaultValue.description : "",
      isValid: true,
    },
  });
  const inputChangeHandler = (inputId, enteredValue) => {
    setInputs((currentValue) => {
      return {
        ...currentValue,
        [inputId]: { value: enteredValue, isValid: true },
      };
    });
  };
  const submitHandler = () => {
    const expense = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expense.amount) && expense.amount > 0;
    const dateIsValid = expense.date.toString() !== "Invalid Date";
    const descriptionIsValid = expense.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("Invalid input", "Please check your input vaues");
      setInputs((currentValue) => {
        return {
          amount: { value: currentValue.amount.value, isValid: amountIsValid },
          date: { value: currentValue.date.value, isValid: dateIsValid },
          description: {
            value: currentValue.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
    } else {
      onSubmit(expense);
    }
  };

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRows}>
        <Input
          style={styles.rowInput}
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>

      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          {" "}
          Invalid input values - please check
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
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
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});
