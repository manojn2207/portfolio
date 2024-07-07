import 'tailwindcss/tailwind.css'
import Navbar from './component/navbar'
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800 text-slate-100"><div className="columns-2"><Navbar /></div>
      <div className="container mx-auto p-4">{children}</div></body>
    </html>
  )
}
