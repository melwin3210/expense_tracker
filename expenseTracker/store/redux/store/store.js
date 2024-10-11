import { configureStore } from "@reduxjs/toolkit";
import  expenseReducer  from "../slice/expensesSlice";

export const store  = configureStore({
    reducer: {
        expenses:expenseReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})