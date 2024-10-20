import {useContext, useEffect, useState} from 'react'
import ExpensesOutput from '../components/Expense/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../utils/date'
import { fetchExpenses } from '../utils/http'
import LoadingOverlay from '../UI/LoadingOverlay'
import ErrorOverlay from '../UI/ErrorOverlay'

const RecentExpenses = () => {
  const [fetching, setIsFetching] = useState(true)
  const [error, setError] = useState()
  const expensesCtx = useContext(ExpensesContext)
  const recentExpenses = expensesCtx.expenses.filter((expense)=>{
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7)
    return expense.date >= date7DaysAgo && expense.date <= today
  })
  useEffect(()=>{
    const getExpenses = async () => {
      setIsFetching(true)
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses)
      } catch(error){
        setError('Could not fetch expenses!')
      }
      setIsFetching(false)
    }
    getExpenses()
  },[])

  const errorHndler = () =>{
    setError(null)
  }
  if(!fetching && error){
    return <ErrorOverlay message={error} onConfirm={errorHndler} />
  }
  if(fetching){
    return <LoadingOverlay />
  }
  return (
    <ExpensesOutput expenses={recentExpenses}  expensesPeriod='Last 7 days' fallbackText='No expenses registered for last 7 days' />
  )
}

export default RecentExpenses
