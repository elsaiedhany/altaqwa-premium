
import "./globals.css"

export const metadata = {
 title:"التقوى للألوميتال والمطابخ"
}

export default function RootLayout({children}:{children:React.ReactNode}){
 return(
  <html lang="ar" dir="rtl">
   <body>{children}</body>
  </html>
 )
}
