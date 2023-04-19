import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/listado-guitarras"
import { getGuitarras } from "~/models/guitarras.server"


export async function loader(){
  const guitarras = await getGuitarras()

  return guitarras
}

function Tienda() {
  const guitarras = useLoaderData()

  return (
    <main className="contenedor">
      <ListadoGuitarras
        guitarras={guitarras}
      ></ListadoGuitarras>
    </main>
  )
}

export default Tienda