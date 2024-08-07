import "../../public/styles/globals.css"
export const metadata = {
  title: 'Next AWS App',
  description: 'App in AWS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
