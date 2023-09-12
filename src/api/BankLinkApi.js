import axios from "axios";
import { settings } from "../constants/settings";
import { map as mapBankLink } from "./mappers/BankLink";

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

const findAllBankLinks = async(userId) => {
  await new Promise(r => setTimeout(r, 1000));

  const response = await BankLinkClient.get("/v1/bank-link", {
    params: {
      userId
    }
  })
  return response.data.map(bankLink => mapBankLink(bankLink))
}

export const BankLinkApi = {
  createLinkToken,
  setPublicToken,
  findAllBankLinks
}
