import React from 'react'
import ExpensesOutput from '../components/Expense/ExpensesOutput'

const RecentExpenses = () => {
  return (
    <ExpensesOutput expensesPeriod='Last 7 days' />
  )
}

export default RecentExpenses
