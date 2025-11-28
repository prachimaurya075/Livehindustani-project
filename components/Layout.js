import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen grow flex flex-col bg-gray-50">
      <Nav />
      <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  )
}
