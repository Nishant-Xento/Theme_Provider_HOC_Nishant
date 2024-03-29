import React from 'react'
import withTheme from './withTheme'

const style = {
  borderBottom: '1px solid #ccc',
  fontSize: '13px',
  padding: '8px 40px',
  textAlign: 'center'
}

const ThemeSwitcher = ({ theme, changeTheme }) => (
  <div style={style}>
    <label style={{ marginRight: '8px' }}>Theme:</label>
    <select value={theme.name} onChange={e => changeTheme(e.target.value)}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
)

export default withTheme(ThemeSwitcher)
