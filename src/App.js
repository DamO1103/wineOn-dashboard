import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Vinos from './pages/vinos'
import Error from './pages/error'
import Usuarios from './pages/usuarios'
import Home from './pages/home'
import Header from './components/Header'
import Footer from './components/Footer'
import { BodyContainer, GlobalStyle, lightTheme} from './styles/globalStyles'


function App() {
  const [theme, setTheme] = useState()

 

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BodyContainer className="BodyContainer" themeStyle={theme} setThemeStyle={setTheme}>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/vinos" element={<Vinos />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </BodyContainer>
      
    </ThemeProvider>
  )
}

export default App
