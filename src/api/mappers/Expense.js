import { parseDate } from "../../helpers/DateTime"
import { ExpenseAmountType } from "../../models/ExpenseAmountType"
import { ExpenseCategory } from "../../models/ExpenseCategory"
import { ExpensePaymentMethod } from "../../models/ExpensePaymentMethod"
import { ExpensePaymentStatus } from "../../models/ExpensePaymentStatus"
import { ExpenseType } from "../../models/ExpenseType"
import { OneTimeExpenseStatus } from "../../models/OneTimeExpenseStatus"
import { RecurringExpenseFrequencyType } from "../../models/RecurringExpenseFrequencyType"
import { RecurringExpenseStatus } from "../../models/RecurringExpenseStatus"

export const map = (original) => {
  return {
    ...original,
    type: ExpenseType.from(original.type),
    oneTimeExpenseStatus: OneTimeExpenseStatus.from(original.oneTimeExpenseStatus),
    recurringExpenseStatus: RecurringExpenseStatus.from(original.recurringExpenseStatus),
    category: ExpenseCategory.from(original.category),
    amountType: ExpenseAmountType.from(original.amountType),
    paymentMethod: ExpensePaymentMethod.from(original.paymentMethod),
    frequency: original.type === ExpenseType.Recurring.name ?
      {
        humanName: RecurringExpenseFrequencyType.from(original.frequency.type)
          .humanNameWithParameter(original.frequency.parameter)
      }
      : undefined,
    firstPaymentDate: parseDate(original.firstPaymentDate),
    payments: original.payments?.map(payment => ({
      ...payment,
      status: ExpensePaymentStatus.from(payment.status),
      authorizationDate: parseDate(payment.authorizationDate),
      postDate: parseDate(payment.postDate)
    })),
    payment: original.payment !== undefined ?
      {
        ...original.payment,
        status: ExpensePaymentStatus.from(original.payment.status),
        authorizationDate: parseDate(original.payment.authorizationDate),
        postDate: parseDate(original.payment.postDate)
      }
      : undefined,
    createdAt: parseDate(original.createdAt),
    updatedAt: parseDate(original.updatedAt)
  }
}
