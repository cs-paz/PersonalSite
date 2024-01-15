import './globals.css'

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body style={{paddingTop: "10px", width: "90%", margin: "auto",  backgroundColor:"#FFD8BE"}}>
        <div className="layout">
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout