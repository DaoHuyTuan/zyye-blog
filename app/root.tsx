import { Links, Meta, Outlet, Scripts } from '@remix-run/react'
import { json } from '@remix-run/node'
import 'inter-ui/inter.css'
import { Layout } from '~/components/Layout'

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
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
