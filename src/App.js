import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalProvider } from './services/context/GlobalContext'
import Home from './pages/home'
import Error from './pages/error'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import { GlobalStyle, ToastStyledContainer, lightTheme, darkTheme } from './styles/globalStyles'

function App() {
  const [theme, setTheme] = useState()

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').matches ? setTheme('dark') : setTheme('light')
  }, [])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <GlobalProvider themeStyle={theme} setThemeStyle={setTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </GlobalProvider>
      <ToastStyledContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
      />
    </ThemeProvider>
  )
}

export default App
