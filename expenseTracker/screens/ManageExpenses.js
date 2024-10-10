import { useLayoutEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../UI/Button";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpenses = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const expensesCtx = useContext(ExpensesContext)
  
  const isEditing = !!editedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const cancelHandler = () => {
    navigation.goBack()
  }
  const confirmHandler = () => {
    if(isEditing){
      expensesCtx.updateExpense(editedExpenseId,{
        description:'TestUpdate',
        amount:780.70,
        date: new Date()
      })
    }else{
      expensesCtx.addExpense({
        description:'Test',
        amount:768.70,
        date: new Date()
      })
    }
    navigation.goBack()
  }
  const deleteHandler = () => {
    expensesCtx.deleteExpense(editedExpenseId)
    navigation.goBack()
  }
    return (
    <View style={styles.container}>
      <View style={styles.buttonContainer} >
        <Button mode='flat' onPress={cancelHandler} style={styles.button} >Cancel</Button>
        <Button onPress={confirmHandler} style={styles.button} >{isEditing ? 'Update' : 'Add'}</Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
          icon="trash"
          size={36}
          color={GlobalStyles.colors.error500}
          onPress={deleteHandler}
        />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  deleteContainer:{
    marginTop:16,
    paddingTop:8,
    borderTopWidth:2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems:'center'
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
})
