import { useLayoutEffect, useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../utils/http";
import LoadingOverlay from "../UI/LoadingOverlay";

const ManageExpenses = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const editedExpenseId = route.params?.expenseId;
  const expensesCtx = useContext(ExpensesContext)
  
  const isEditing = !!editedExpenseId;
 const selectedExpense = isEditing ? expensesCtx.expenses.find((expense)=> expense.id === editedExpenseId) : ''
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const cancelHandler = () => {
    navigation.goBack()
  }
 const  confirmHandler = async(expenseDetails) => {
  setIsSubmitting(true)
    if(isEditing){
      expensesCtx.updateExpense(editedExpenseId,expenseDetails)
      await updateExpense(editedExpenseId, expenseDetails)
    }else{
      const id = await storeExpense(expenseDetails)
      expensesCtx.addExpense({id:id, ...expenseDetails})
    }
    navigation.goBack()
  }
  const deleteHandler = async() => {
    setIsSubmitting(true)
    expensesCtx.deleteExpense(editedExpenseId)
    await deleteExpense(editedExpenseId)
    navigation.goBack()
  }
  if(isSubmitting){
    return <LoadingOverlay/>
  }
    return (
    <View style={styles.container}>
      <ExpenseForm cancelHandler={cancelHandler} isEditing={isEditing} onSubmit={confirmHandler} defaultValue={selectedExpense} />
      
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
  }
})
