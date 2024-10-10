import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../UI/Button";

const ManageExpenses = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  
  const isEditing = !!editedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const cancelHandler = () => {}
  const addHandler = () => {}
  const deleteHandler = () => {}
    return (
    <View style={styles.container}>
      <View style={styles.buttonContainer} >
        <Button mode='flat' onPress={cancelHandler} style={styles.button} >Cancel</Button>
        <Button onPress={addHandler} style={styles.button} >{isEditing ? 'Update' : 'Add'}</Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
          icon="trash"
          size={36}
          color={GlobalStyles.colors.error500}
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
