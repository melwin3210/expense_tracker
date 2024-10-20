import {useContext, useEffect, useState} from 'react'
import ExpensesOutput from '../components/Expense/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../utils/date'
import { fetchExpenses } from '../utils/http'
import LoadingOverlay from '../UI/LoadingOverlay'

const RecentExpenses = () => {
  const [fetching, setIsFetching] = useState(true)
  const expensesCtx = useContext(ExpensesContext)
  const recentExpenses = expensesCtx.expenses.filter((expense)=>{
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7)
    return expense.date >= date7DaysAgo && expense.date <= today
  })
  useEffect(()=>{
    const getExpenses = async () => {
      setIsFetching(true)
      const expenses = await fetchExpenses();
      setIsFetching(false)
      expensesCtx.setExpenses(expenses)
    }
    getExpenses()
  },[])
  if(fetching){
    return <LoadingOverlay />
  }
  return (
    <ExpensesOutput expenses={recentExpenses}  expensesPeriod='Last 7 days' fallbackText='No expenses registered for last 7 days' />
  )
}

export default RecentExpenses
