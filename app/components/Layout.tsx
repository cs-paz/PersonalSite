import { CssVarsProvider, extendTheme } from '@mui/joy/styles'
import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline'
import NavBar from './NavBar'
import HomeContent from './HomeContent'

export default function Layout() {
  return (
      <CssVarsProvider>
        {/* must be used under CssVarsProvider */}
        <CssBaseline/>
        <Box>
          <NavBar/>
        </Box>
          <HomeContent></HomeContent>
        {/* The rest of your application */}
      </CssVarsProvider>
  )
}
