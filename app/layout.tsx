import { Inter } from 'next/font/google'
import { ThemeProvider } from './providers'
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muhammad Fahad Waqar - Portfolio',
  description: 'Computer Engineer specializing in Data Science and Machine Learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

