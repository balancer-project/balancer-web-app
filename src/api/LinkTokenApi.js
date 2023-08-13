import { settings } from "../constants/settings";
import axios from "axios";

const LinkTokenApi = axios.create({
  baseURL: settings.bankingConnector.baseUrl
})

export const createLinkToken = async (userId) => {
  const response = await LinkTokenApi.post('/link-tokens/create', {
    userId
  })
  return response.data
}
