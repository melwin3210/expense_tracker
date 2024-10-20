import {useContext, useEffect} from 'react'
import ExpensesOutput from '../components/Expense/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../utils/date'
import { fetchExpenses } from '../utils/http'

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext)
  const recentExpenses = expensesCtx.expenses.filter((expense)=>{
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7)
    return expense.date >= date7DaysAgo && expense.date <= today
  })
  useEffect(()=>{
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses)
    }
    getExpenses()
  },[])
  return (
    <ExpensesOutput expenses={recentExpenses}  expensesPeriod='Last 7 days' fallbackText='No expenses registered for last 7 days' />
  )
}

export default RecentExpenses
