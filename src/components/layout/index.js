import React, { useState } from 'react'
import { css } from '@emotion/core'
import {ThemeProvider} from 'emotion-theming'

import { variables } from '../../styles'

const themeToggle = (theme) => css({
  position: 'fixed',
  bottom: 50,
  right: 50,
  width: 50,
  height: 50,
  borderRadius: 25,
  background: theme.oledToggleBackground,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: theme.iconShadow,
  transition: 'all 0.2s ease',
  svg: {
    path: {
      transition: 'all 0.2s ease',
      fill: theme.oledToggleFill,
    }
  }
})
const Layout = ({ children }) => {
  const [isOLED, setTheme] = useState(false)
  return (
    <ThemeProvider theme={isOLED ? Object.assign({}, variables.light, variables.dark) : variables.light}>
      <div css={themeToggle} onClick={() => setTheme(!isOLED)}>
        <svg height={20} width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>moon</title>
          <g stroke="none">
            <path d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z" fill="#111111"/>
          </g>
        </svg>
      </div>
      {children}
    </ThemeProvider>
  )
}

export default Layout
