import { settings } from "../constants/settings";
import axios from "axios";

const BankAccountLink = axios.create({
  baseURL: settings.bankingConnector.baseUrl
})

export const createLinkToken = async (userId) => {
  const response = await BankAccountLink.post("/v1/bank-account-link/create-link-token", {
    userId
  })
  return response.data.linkToken
}

export const setPublicToken = async (userId, publicToken) => {
  const response = await BankAccountLink.post("/v1/bank-account-link/set-public-token", {
    userId,
    publicToken
  })
  return response.data
}
