import React from 'react'
import Header from './_components/AppHeader'
import { ThemeProvider } from '@/components/ui/theme-provider'

function DashBoardlayout({children}: {children: React.ReactNode}) {
  return (
    <div suppressHydrationWarning={true}>
       <ThemeProvider 
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
      <Header />
      <div className='px-[12vw] py-10'>
        {children} 
       </div>
        </ThemeProvider>
    </div>
  )
}

export default DashBoardlayout
