import { useNavigate } from '@remix-run/react'

interface Props {
  title: string
  slug: string
  category: string
  tags?: string[]
}

export const BlogItem = (props: Props) => {
  const navigate = useNavigate()

  const handleLinkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    button.disabled = true
    button.style.opacity = '0.5'
    button.style.cursor = 'not-allowed'

    // Delay 1000ms before navigation to show global loading
    setTimeout(() => {
      navigate(`/${props.category}/${props.slug}`)
    }, 1000)
  }

  return (
    <div className="cursor-pointer">
      <button
        onClick={handleLinkClick}
        className="text-[#2b2b2b] relative text-[14px] after:bg-[#2b2b2b] after:h-[1px] after:w-full after:absolute after:left-0 after:bottom-[-3px] bg-transparent border-none p-0 cursor-pointer text-left">
        {props.title}
      </button>
      {props.tags && props.tags.length > 0 && (
        <div className="flex gap-2 mt-2">
          {props.tags.map(tag => (
            <span
              key={tag}
              className="text-[12px] text-[white] bg-[#2b2b2b] px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
