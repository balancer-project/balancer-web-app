import axios from "axios";
import { settings } from "../constants/settings";
import { map as mapExpense } from "./mappers/Expense";

const ExpensesClient = axios.create({
  baseURL: settings.coreMicroservice.baseUrl
})

const findExpenses = async (userId) => {
  await new Promise(r => setTimeout(r, 2000));

  return await ExpensesClient
    .get(`/v1/users/${userId}/expenses`)
    .then(response => response.data.map(expense => mapExpense(expense)))
}

export const ExpensesApi = {
  findExpenses
}
