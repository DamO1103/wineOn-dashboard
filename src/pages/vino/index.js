import React from 'react'
import { MainSection } from '../../styles/globalStyles'



export default function Vino() {
  const [vino, setVino] = React.useState([])


React.useEffect(() => {
  obtenerVino();
}, [])


const obtenerVino =  async (e) => {
  const data = await fetch("http://localhost:3500/api/products");
  const productos = await data.json()
  console.log(data)
  let ultimoVino = productos.wines[productos.wines.length - 1]
  setVino(ultimoVino);
  
  
  /* console.log(ultimoVino) */
  
}

 
  return  (
    <MainSection className="MainSection">
      {/* <PageContainer className="PageContainer"> */}
        <h1>Ultimo vino agregado</h1>
        <h3>{vino.name}</h3>
        
          {
               
                   <div>
                         
                         <p> $  {vino.price} </p>  
                         <p>  {vino.fee} </p> 
                         <p>  {vino.discount} </p> 
                         <p>  {vino.description} </p> 
                         <p>  {vino.stock} </p> 
                         <p>  {vino.bodega} </p> 
                         <p>  {vino.cepa} </p> 
                         <img src= {vino.image} alt="imagen"/>   
                         
                    
              </div>
          }
       
      
      {/* </PageContainer> */}
    </MainSection>
  )
}
