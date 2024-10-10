import React from 'react'
import { View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 1010,
        date: new Date('1/10/2024')
    },
    {
        id: 'e2',
        description: 'Shirt',
        amount: 700,
        date: new Date('3/10/2024')
    },
    {
        id: 'e3',
        description: 'A pair of shoes',
        amount: 2000,
        date: new Date('4/10/2024')
    },
    {
        id: 'e4',
        description: 'Facewash',
        amount: 300,
        date: new Date('5/10/2024')
    },
    {
        id: 'e5',
        description: 'Laptop Table',
        amount: 1200,
        date: new Date('6/10/2024')
    },
    {
        id: 'e6',
        description: 'Grocery Items',
        amount: 2300,
        date: new Date('6/10/2024')
    },
    {
        id: 'e7',
        description: 'Sofa cum bed',
        amount: 6600,
        date: new Date('8/10/2024')
    }
]

const ExpensesOutput = ({expenses, expensesPeriod}) => {
  return (
    <View>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
        <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

export default ExpensesOutput
