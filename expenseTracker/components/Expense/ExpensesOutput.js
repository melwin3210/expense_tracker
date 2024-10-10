import React from 'react'
import { StyleSheet, View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/styles'

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 1010,
        date: new Date('2024-10-05')
    },
    {
        id: 'e2',
        description: 'Shirt',
        amount: 700,
        date: new Date('2024-10-06')
    },
    {
        id: 'e3',
        description: 'A pair of shoes',
        amount: 2000,
        date: new Date('2024-10-05')
    },
    {
        id: 'e4',
        description: 'Facewash',
        amount: 300,
        date: new Date('2024-10-05')
    },
    {
        id: 'e5',
        description: 'Laptop Table',
        amount: 1200,
        date: new Date('2024-10-05')
    },
    {
        id: 'e6',
        description: 'Grocery Items',
        amount: 2300,
        date: new Date('2024-10-05')
    },
    {
        id: 'e7',
        description: 'Sofa cum bed',
        amount: 6600,
        date: new Date('2024-10-05')
    },
    {
        id: 'e8',
        description: 'A pair of shoes',
        amount: 1010,
        date: new Date('1-10-2024')
    },
    {
        id: 'e9',
        description: 'Shirt',
        amount: 700,
        date: new Date('3-10-2024')
    },
    {
        id: 'e10',
        description: 'A pair of shoes',
        amount: 2000,
        date: new Date('4-10-2024')
    },
    {
        id: 'e11',
        description: 'Facewash',
        amount: 300,
        date: new Date('5-10-2024')
    },
    {
        id: 'e12',
        description: 'Laptop Table',
        amount: 1200,
        date: new Date('6-10-2024')
    },
    {
        id: 'e67',
        description: 'Grocery Items',
        amount: 2300,
        date: new Date('6-10-2024')
    },
    {
        id: 'e78',
        description: 'Sofa cum bed',
        amount: 6600,
        date: new Date('8-10-2024')
    }
]

const ExpensesOutput = ({expenses, expensesPeriod}) => {
  return (
    <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
        <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

export default ExpensesOutput
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0,
        backgroundColor: GlobalStyles.colors.primary700
    }
})
