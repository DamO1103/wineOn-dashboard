import React from 'react'
import { UltimoVino, ContenedorVinoCategorias, Categorias, Cantidad, CategoriasCantidad, CatCantHijo, TotalIcono } from '../../styles/globalStyles'
import {HeaderSection} from '../../components/Header/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineBottle} from "@fortawesome/free-solid-svg-icons"
import {faWarehouseFull} from "@fortawesome/free-regular-svg-icons"


export default function Vino() {
  const [vino, setVino] = React.useState([])
  const [vinos, setVinos] = React.useState([])

React.useEffect(() => {
  obtenerVino();
  obtenerVinos()
}, [])


const obtenerVino =  async (e) => {
  const data = await fetch("http://localhost:3500/api/products");
  const productos = await data.json()
  console.log(data)
  let ultimoVino = productos.wines[productos.wines.length - 1]
  setVino(ultimoVino);  
}

const obtenerVinos =  async (e) => {
  const data = await fetch("http://localhost:3500/api/products");
  const productos = await data.json()
  setVinos(productos)
}
 
  return  (
    
      <ContenedorVinoCategorias > 
    <UltimoVino > 
      {/* <PageContainer className="PageContainer"> */}
        <h2>Ultimo vino agregado</h2>
        <h3>{vino.name}</h3>
          {
            <div>
            
                         <p> PRECIO: $ {vino.price} </p>  
                         <p> DESCRIPCION: {vino.description} </p> 
                         <p> UNIDADES DISPONIBLES: {vino.stock} </p> 
                         <p> BODEGA: {vino.bodega} </p> 
                         <p> CEPA: {vino.cepa} </p> 
                         <img src= {vino.urlImage} alt="imagen"/>     
            </div>
          }
       
      
      {/* </PageContainer> */}
           </UltimoVino> 

           <CategoriasCantidad>
           <TotalIcono >
              <p>Bodegas  </p>
              
              </TotalIcono>
               <Categorias > 
                    <CatCantHijo >
                    <h4>Norton - {vinos.norton}</h4>
                    </CatCantHijo>
                    <CatCantHijo >
                    <h4>Santa Julia - {vinos.santaJulia}</h4>
                     </CatCantHijo>
                    <CatCantHijo >
                    <h4>Rutini - {vinos.rutini}</h4>
                   </CatCantHijo>
              </Categorias>
              <TotalIcono >
              <p>Totales  </p>
              
              </TotalIcono>
              <Cantidad > 
                    <CatCantHijo >
                    <h4>Cantidad vinos - {vinos.totalWines}  </h4>
                   
                    </CatCantHijo>
                    <CatCantHijo >
                    <h4>Vinos tintos - {vinos.tintos}</h4>
                     </CatCantHijo>
                    <CatCantHijo >
                    <h4>Vinos blancos - {vinos.blancos}</h4>
                   </CatCantHijo>
              </Cantidad>
           </CategoriasCantidad>
     </ContenedorVinoCategorias>  
         
  )
}
