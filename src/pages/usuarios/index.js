import React from 'react'
import { MainSection, PageContainer } from '../../styles/globalStyles'


export default function Usuarios() {
  const [usuarios, setUsuarios] = React.useState([])


React.useEffect(() => {
  obtenerUsuarios();
}, [])


const obtenerUsuarios =  async () => {
  const data = await fetch("http://localhost:3500/api/users");
  const users = await data.json()
  setUsuarios(users.users)
}

 
  return  (
    <MainSection className="MainSection">
      <PageContainer className="PageContainer">
      
        <h1>Usuarios en la base de datos: {usuarios.length}</h1>
        <ul>
          {
              usuarios.map(usuario => (  
                     
                         <li key= {usuario.id}> {usuario.name} {usuario.lastName} - {usuario.email} </li>
                         
              ))
          }
        </ul>
      
      </PageContainer>
    </MainSection>
  )
}
