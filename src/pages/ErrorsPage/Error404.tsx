import { useRouteError } from 'react-router-dom'

export default function Error404() {
  const error: any = useRouteError()

  return (
    <div>
      <h2>
        Opss...! Error {error.status} no se encontro la pagina que buscabas.
      </h2>
      <span>{error.statusText}</span>
    </div>
  )
}
