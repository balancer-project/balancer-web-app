import bbvaIcon from "../images/banks/bbva.png"
import caixabankIcon from "../images/banks/caixabank.png"
import sabadellIcon from "../images/banks/sabadell.png"
import santanderIcon from "../images/banks/santander.png"

export const FinancialInstitution = {
  BancoSantander: {
    id: "ins_65",
    name: "Banco Santander",
    icon: santanderIcon
  },
  BBVA: {
    id: "ins_68",
    name: "BBVA",
    icon: bbvaIcon
  },
  CaixaBank: {
    id: "ins_76",
    name: "CaixaBank",
    icon: caixabankIcon
  },
  BancoSabadell: {
    id: "ins_67",
    name: "Banco Sabadell",
    icon: sabadellIcon
  },

  from: (id) => FinancialInstitution[Object.keys(FinancialInstitution).find(key => FinancialInstitution[key].id === id)]
}
