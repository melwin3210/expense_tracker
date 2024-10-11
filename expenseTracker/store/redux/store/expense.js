import { createSlice } from "@reduxjs/toolkit";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 1010,
    date: new Date("2024-10-05"),
  },
  {
    id: "e2",
    description: "Shirt",
    amount: 700,
    date: new Date("2024-10-06"),
  },
  {
    id: "e3",
    description: "A pair of shoes",
    amount: 2000,
    date: new Date("2024-10-05"),
  },
  {
    id: "e4",
    description: "Facewash",
    amount: 300,
    date: new Date("2024-10-05"),
  },
  {
    id: "e5",
    description: "Laptop Table",
    amount: 1200,
    date: new Date("2024-10-05"),
  },
  {
    id: "e6",
    description: "Grocery Items",
    amount: 2300,
    date: new Date("2024-10-05"),
  },
  {
    id: "e7",
    description: "Sofa cum bed",
    amount: 6600,
    date: new Date("2024-10-05"),
  },
  {
    id: "e8",
    description: "A pair of shoes",
    amount: 1010,
    date: new Date("1-10-2024"),
  },
  {
    id: "e9",
    description: "Shirt",
    amount: 700,
    date: new Date("3-10-2024"),
  },
  {
    id: "e10",
    description: "A pair of shoes",
    amount: 2000,
    date: new Date("4-10-2024"),
  },
  {
    id: "e11",
    description: "Facewash",
    amount: 300,
    date: new Date("5-10-2024"),
  },
  {
    id: "e12",
    description: "Laptop Table",
    amount: 1200,
    date: new Date("6-10-2024"),
  },
  {
    id: "e67",
    description: "Grocery Items",
    amount: 2300,
    date: new Date("6-10-2024"),
  },
  {
    id: "e78",
    description: "Sofa cum bed",
    amount: 6600,
    date: new Date("8-10-2024"),
  },
];

const favoritesSlice = createSlice({
  name: "expenses",
  initialState: DUMMY_EXPENSES,
  reducers: {
    addExpense: (state, action) => {
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    },
    updateExpense: (state, action) => {
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload };

      const updatedExpenseList = [...state];
      updatedExpenseList[updatableExpenseIndex] = updatedItem;
      return updatedExpenseList;
    },
    deleteExpense: (state, action) => {
      return state.filter((expense) => expense.id !== action.payload);
    },
  },
});
export const { addExpense, updateExpense, deleteExpense } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
