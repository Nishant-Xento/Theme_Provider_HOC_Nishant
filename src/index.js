import React from 'react'
import { render } from 'react-dom'
import ThemeProvider from './ThemeProvider'
import ThemeSwitcher from './ThemeSwitcher'
import Content from './Content'
import './style.css'

const Style = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
}

const App = () => (
  <ThemeProvider>
    <main style={Style}>
      <ThemeSwitcher />
      <Content />
    </main>
  </ThemeProvider>
)

render(<App />, document.getElementById('root'))
