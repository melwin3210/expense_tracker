import {useContext} from 'react'
import ExpensesOutput from '../components/Expense/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'
import { useSelector } from 'react-redux'

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext)
  const expenses = useSelector(store=>store.expenses)
  return (
    <ExpensesOutput expenses={expenses} expensesPeriod='Total' fallbackText="No registered expenses found!" />
  )
}

export default AllExpenses
