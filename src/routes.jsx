import { Expenses } from "./pages/Expenses"
import { Home } from "./pages/Home"
import { LinkBankAccount } from "./pages/LinkBankAccount"
import { LinkedBankAccounts } from "./pages/LinkedBankAccounts"
import { NotFound } from "./pages/NotFound"

export const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/bank-accounts",
    element: <LinkedBankAccounts />
  },
  {
    path: "/bank-accounts/link",
    element: <LinkBankAccount />
  },
  {
    path: "/expenses",
    element: <Expenses />
  },
  {
    path: "*",
    element: <NotFound />
  }
]
