'use client'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body style={{paddingTop: "10px", width: "90%", margin: "auto",  backgroundColor:"#FFEEDD"}}>
        <div className="layout">
          {children}
        </div>
      </body>
    </html>
  )
}
