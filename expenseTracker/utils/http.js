import axios from "axios";
const BACKEND_URL =
  "https://expenses-b8e3a-default-rtdb.asia-southeast1.firebasedatabase.app";
export const storeExpense = async (expenseData) => {
  const response = await axios.post(BACKEND_URL + "/expenses.json", expenseData);
  const id = response.data.name;
  return id;
};

export const fetchExpenses = async (expenseData) => {
  const response = await axios.get(BACKEND_URL + "/expenses.json");
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};
