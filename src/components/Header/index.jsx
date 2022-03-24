import React, { /* useState, */ } from 'react'
import { Link } from 'react-router-dom'
import { IoHomeOutline, IoDocumentTextOutline } from 'react-icons/io5'


import { HeaderSection, Title, ImageContainer } from './styles'

const Header = () => {
  

  

  return (
    <HeaderSection className="HeaderSection">
      <ImageContainer className="burger">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul className="menu">
          <Link to="/">
            <IoHomeOutline />
            <li>Home</li>
          </Link>
          <Link to="/usuarios">
            <IoDocumentTextOutline />
            <li>Usuarios</li>
          </Link>
          <Link to="/vinos">
            <IoDocumentTextOutline />
            <li>Vinos</li>
          </Link>
          {/* <Link to="/page3">
            <IoDocumentTextOutline />
            <li>Page 3</li>
          </Link> */}
        </ul>
      </ImageContainer>

      <Link to="/">
        <Title>WineOn</Title>
      </Link>
    </HeaderSection>
  )
}

export default Header
