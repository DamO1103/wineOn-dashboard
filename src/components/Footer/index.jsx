import React from 'react'
import { FooterSection, Container, SubContainer, Credits } from './styles'

const Footer = () => {
  return (
    <FooterSection className="FooterSection">
      <Container className="footerContainer">
        

        <SubContainer className="developer">
          <Credits>WineOn 2022 - Todos los derechos reservados</Credits>
        </SubContainer>

        
      </Container>
    </FooterSection>
  )
}

export default Footer
