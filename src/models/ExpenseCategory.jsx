import { PiAirplaneTiltLight, PiBankLight, PiBowlFoodLight, PiBuildingsLight, PiBusLight, PiClockLight, PiCloudLight, PiGearLight, PiHeartbeatLight, PiHouseLineLight, PiHouseSimpleLight, PiMoneyLight, PiMusicNotesLight, PiPersonArmsSpreadLight, PiShoppingBagLight } from "react-icons/pi"

export const ExpenseCategory = Object.freeze({
  transfer_out: {
    name: "transfer_out",
    humanName: "transferencia saliente",
    icon: <PiMoneyLight />
  },
  loan_payments: {
    name: "loan_payments",
    humanName: "préstamo",
    icon: <PiClockLight />
  },
  bank_fees: {
    name: "bank_fees",
    humanName: "comisiones bancarias",
    icon: <PiBankLight />
  },
  entertainment: {
    name: "entertainment",
    humanName: "entreteminimiento",
    icon: <PiMusicNotesLight />
  },
  food_and_drink: {
    name: "food_and_drink",
    humanName: "comida y bebida",
    icon: <PiBowlFoodLight />
  },
  general_merchandise: {
    name: "general_merchandise",
    humanName: "productos en general",
    icon: <PiShoppingBagLight />
  },
  home_improvement: {
    name: "home_improvement",
    humanName: "hogar",
    icon: <PiHouseLineLight />
  },
  medical: {
    name: "medical",
    humanName: "salud",
    icon: <PiHeartbeatLight />
  },
  personal_care: {
    name: "personal_care",
    humanName: "cuidado personal",
    icon: <PiPersonArmsSpreadLight />
  },
  general_services: {
    name: "general_services",
    humanName: "servicios en general",
    icon: <PiGearLight />
  },
  government_and_non_profit: {
    name: "government_and_non_profit",
    humanName: "impuestos y gastos de la administración",
    icon: <PiBuildingsLight />
  },
  transportation: {
    name: "transportation",
    humanName: "transporte",
    icon: <PiBusLight />
  },
  travel: {
    name: "travel",
    humanName: "viajes",
    icon: <PiAirplaneTiltLight />
  },
  rent_and_utilities: {
    name: "rent_and_utilities",
    humanName: "alquiler y suministros del hogar",
    icon: <PiHouseSimpleLight />
  },
  other: {
    name: "other",
    humanName: "otros",
    icon: <PiCloudLight />
  },

  from: (name) => ExpenseCategory[Object.keys(ExpenseCategory).find(key => ExpenseCategory[key].name === name)],
  values: () => Object.keys(ExpenseCategory).filter(key => typeof ExpenseCategory[key] !== 'function').map(key => ExpenseCategory[key])
})
