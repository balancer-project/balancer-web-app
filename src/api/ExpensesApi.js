import axios from "axios";
import { settings } from "../constants/settings";
import { map as mapExpense } from "./mappers/Expense";

const ExpensesClient = axios.create({
  baseURL: settings.coreMicroservice.baseUrl
})

const findExpenses = async (userId) => {
  // await new Promise(r => setTimeout(r, 1000));

  return await ExpensesClient
    .get(`/v1/users/${userId}/expenses`)
    .then(response => response.data.map(expense => mapExpense(expense)))
}

const registerExpense = async (userId, expense) => {
  await new Promise(r => setTimeout(r, 1000));

  return await ExpensesClient
    .post(`/v1/users/${userId}/expenses`, expense)
}

export const ExpensesApi = {
  findExpenses,
  registerExpense
}
