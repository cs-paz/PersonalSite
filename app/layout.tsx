'use client'
import './globals.css'
import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import NavBar from './components/NavBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CssVarsProvider>
      {/* must be used under CssVarsProvider */}
      <CssBaseline />
      <NavBar/>

      {/* The rest of your application */}
    </CssVarsProvider>
  )
}
