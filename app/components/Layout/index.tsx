import { ReactNode } from 'react'
import { Header } from '~/components/Header'
import { Slogan } from '~/components/Slogan'
import { Menu } from '~/components/Menu'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[720px]">
        <Header />
        <Slogan />
        <Menu />
        {children}
      </div>
    </div>
  )
}
