import React from 'react'
import { FooterSection, Container, SubContainer, Title, Credits } from './styles'

const Footer = () => {
  return (
    <FooterSection className="FooterSection">
      <Container className="footerContainer">
        <SubContainer className="project">
          <Title>ReactJS Template 2021</Title>
        </SubContainer>

        <SubContainer className="developer">
          <Credits>Lucas Koval | Full Stack Developer</Credits>
        </SubContainer>

        <SubContainer className="contact">
          <a href="https://lucaskovaldev.com/" target="_blank" rel="noreferrer" title="Portfolio">
            <img src="/icon/portfolio.svg" alt="Portfolio" width="40px" height="40" />
          </a>

          <a
            href="mailto:lucaskovaldev@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="Email"
            style={{ margin: '0 0.5rem 0 1rem' }}
          >
            <img src="/icon/email.png" alt="Email" width="37px" height="36px" />
          </a>

          <a
            href="https://www.linkedin.com/in/lucaskoval/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            style={{ margin: '0 1rem 0 0.5rem' }}
          >
            <img src="/icon/linkedin.svg" alt="LinkedIn" width="35px" height="35" />
          </a>

          <a href="https://github.com/LucasKoval" target="_blank" rel="noreferrer" title="GitHub">
            <img
              src="/icon/github.png"
              alt="GitHub"
              width="36px"
              height="36px"
              className="bg-white rounded-3"
            />
          </a>
        </SubContainer>
      </Container>
    </FooterSection>
  )
}

export default Footer
