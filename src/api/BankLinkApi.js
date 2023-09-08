import axios from "axios";
import { settings } from "../constants/settings";

const BankLinkClient = axios.create({
  baseURL: settings.bankingConnectorMicroservice.baseUrl
})

const createLinkToken = async (userId) => {
  const response = await BankLinkClient.post("/v1/bank-link/create-link-token", {
    userId
  })
  return response.data.linkToken
}

const setPublicToken = async (userId, institutionId, publicToken) => {
  const response = await BankLinkClient.post("/v1/bank-link/set-public-token", {
    userId,
    institutionId,
    publicToken
  })
  return response.data
}

export const BankLinkApi = {
  createLinkToken,
  setPublicToken
}
