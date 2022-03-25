import React from 'react'
import { MainSection } from '../../styles/globalStyles'
import Vino from "../vino/index"
import { TableContainer, TdContainer, ThContainer, TbodyContainer, TheadContainer} from '../../styles/globalStyles'


export default function Vinos() {
  const [vinos, setVinos] = React.useState([])


React.useEffect(() => {
  obtenerVinos()
}, [])


const obtenerVinos =  async () => {
  const data = await fetch("http://localhost:3500/api/products");
  const productos = await data.json()
  setVinos(productos.wines)
  console.log(data)
  console.log(productos)
  console.log(productos.wines)
  }

 
  return  (
    
    <MainSection className="MainSection">
      {/* <PageContainer className="PageContainer"> */}
      
        <Vino />
         <h4>Todos los vinos</h4>
        
            <div>
              
                  <TableContainer > 
                    <TheadContainer className= "TheadContainer">
                       <tr>
                          <ThContainer className='ThContainer'>Nombre</ThContainer>
                          <ThContainer className='ThContainer'>Precio</ThContainer>  
                          <ThContainer className='ThContainer'>Descripcion</ThContainer> 
                       </tr>
                    </TheadContainer>
                    <TbodyContainer className='TbodyContainer'>
          {
                  vinos.map(vino => (  
                       <tr>
                          <TdContainer className='TdContainer'> {vino.name}</TdContainer>
                          <TdContainer className='TdContainer'>  {vino.price} </TdContainer>  
                          <TdContainer className='TdContainer'> {vino.description} </TdContainer> 
                       </tr>
                  ))
                  }
                    </TbodyContainer>
                  </TableContainer>
                </div> 
                
        
      
      {/* </PageContainer> */}
     </MainSection> 
  
  )
}
