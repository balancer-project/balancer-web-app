import { Accordion } from "react-bootstrap"
import { BankLinksListItem } from "./BankLinksListItem"


export const BankLinksList = ({ bankLinks, loading }) => {
  return (
    <div className="bank-links-list">
      <div className={`loader-wrapper mb-3 ${!loading ? "hidden" : ""}`}>
        <div className="loader-line"></div>
      </div>
      <Accordion>
          {bankLinks.map((bankLink, index) => <BankLinksListItem key={bankLink.id} bankLink={bankLink} index={index} />)}
      </Accordion>
    </div>
  )
}
