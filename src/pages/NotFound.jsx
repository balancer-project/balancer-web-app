import useDocumentTitle from "../hooks/useDocumentTitle"

export const NotFound = () => {
  useDocumentTitle("No encontrado – Balancer")

  return (
    <article>
      <h1>No encontrado</h1>
    </article>
  )
}
