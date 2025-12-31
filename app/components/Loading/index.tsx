import { VscLoading } from 'react-icons/vsc'

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[200px]">
      <VscLoading className="animate-spin text-[24px]" />
    </div>
  )
}

// Default export for dynamic import
export default Loading
