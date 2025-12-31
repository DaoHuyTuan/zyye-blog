import { Link, useLocation, useNavigation } from '@remix-run/react'
import { VscLoading } from 'react-icons/vsc'

export const Menu = () => {
  const location = useLocation()
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <div className="flex gap-4 pt-[20px] px-[20px]">
      <Link
        to="/"
        className={`hover:text-gray-600 text-[14px] transition-colors ${
          location.pathname === '/' ? 'border-b-[1px] border-black' : ''
        }`}>
        blogs
      </Link>
      <Link
        to="/about"
        className={`hover:text-gray-600 text-[14px] transition-colors ${
          location.pathname === '/about' ? 'border-b-[1px] border-black' : ''
        }`}>
        about
      </Link>
      <Link
        to="/moments"
        className={`hover:text-gray-600 text-[14px] transition-colors ${
          location.pathname === '/moments' ? 'border-b-[1px] border-black' : ''
        }`}>
        moments
      </Link>
    </div>
  )
}
