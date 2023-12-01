import { CssVarsProvider, extendTheme } from '@mui/joy/styles'
import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline'
import NavBar from './NavBar'
import HomeContent from './HomeContent'

function Layout() {
  return (
      <CssVarsProvider>
        {/* must be used under CssVarsProvider */}
        <CssBaseline/>
          <HomeContent/>
        {/* The rest of your application */}
      </CssVarsProvider>
  )
}

export default Layout