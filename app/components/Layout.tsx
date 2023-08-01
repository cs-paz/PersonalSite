import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import NavBar from './NavBar'
import HomeContent from './HomeContent'

export default function Layout() {
  return (
      <CssVarsProvider>
        {/* must be used under CssVarsProvider */}
        <CssBaseline />
          <NavBar/>
          <HomeContent></HomeContent>
        {/* The rest of your application */}
      </CssVarsProvider>
  )
}
