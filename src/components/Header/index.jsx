import React, { /* useState, */ useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoHomeOutline, IoDocumentTextOutline } from 'react-icons/io5'
import { GlobalContext } from '../../services/context/GlobalContext'

import { HeaderSection, Title, ImageContainer } from './styles'

const Header = () => {
  const { themeStyle, setThemeStyle } = useContext(GlobalContext)
  /* const [selected, setSelected] = useState(false) */

  const themeToggler = () => {
    themeStyle === 'light' ? setThemeStyle('dark') : setThemeStyle('light')
  }

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
          <Link to="/page1">
            <IoDocumentTextOutline />
            <li>Page 1</li>
          </Link>
          <Link to="/page2">
            <IoDocumentTextOutline />
            <li>Page 2</li>
          </Link>
        </ul>
      </ImageContainer>

      <Link to="/">
        <Title>ReactJS Template</Title>
      </Link>

      <ImageContainer className="themeToogle" onClick={() => themeToggler()}>
        <img
          src="/icon/themeToogle.png"
          alt="SearchIcon"
          width="40"
          height="40"
          className="themeToogle"
        />
      </ImageContainer>
    </HeaderSection>
  )
}

export default Header
