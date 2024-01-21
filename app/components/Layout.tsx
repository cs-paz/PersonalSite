import { CssVarsProvider, extendTheme } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import HomeContent from './HomeContent/HomeContent'

const Layout = () => {
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