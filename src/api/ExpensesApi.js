import axios from "axios";
import { settings } from "../constants/settings";

const ExpensesClient = axios.create({
  baseURL: settings.coreMicroservice.baseUrl
})

const findExpenses = async (userId) => {
  return await ExpensesClient.get(`/v1/users/${userId}/expenses`)
}

export const ExpensesApi = {
  findExpenses
}
