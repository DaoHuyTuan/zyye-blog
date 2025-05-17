import { Links, Meta, Outlet, Scripts } from '@remix-run/react'
import { json } from '@remix-run/node'

export const links = () => [{ rel: 'stylesheet', href: '../app/tailwind.css' }]

// export const meta = () => ({
//   charset: 'utf-8',
//   title: 'My Remix Blog',
//   viewport: 'width=device-width,initial-scale=1'
// })

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-100">
        <header className="bg-white shadow">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-3xl font-bold text-gray-900">My Blog</h1>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </main>
        <Scripts />
      </body>
    </html>
  )
}
