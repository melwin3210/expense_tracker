import React from 'react'
import { Text } from 'react-native'
import ExpensesOutput from '../components/Expense/ExpensesOutput'

const RecentExpenses = () => {
  return (
    <ExpensesOutput expensesPeriod='Lat 7 days' />
  )
}

export default RecentExpenses
