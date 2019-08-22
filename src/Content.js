import React from 'react'
import withTheme from './withTheme'

const baseStyle = {
  flex: '1',
  padding: '40px'
}

const Content = ({ theme: { name, ...style } }) => (
  <div style={{ ...baseStyle, ...style }}>
    <p>This is some text styled by the theme.</p>
  </div>
)

export default withTheme(Content)
