import { Moment } from '~/utils/constants'
import { Link } from '@remix-run/react'

interface Props {
  moment: Moment
}

const categoryColors = {
  life: 'bg-green-100 text-green-700',
  love: 'bg-pink-100 text-pink-700',
  game: 'bg-purple-100 text-purple-700',
  work: 'bg-blue-100 text-blue-700',
  travel: 'bg-orange-100 text-orange-700'
}

const categoryLabels = {
  life: 'Đời sống',
  love: 'Tình cảm',
  game: 'Game',
  work: 'Công việc',
  travel: 'Du lịch'
}

export const MomentCard = ({ moment }: Props) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('vi-VN')
  }

  return (
    <Link
      to={`/moments/${moment.id}`}
      className="block">
      <div className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="aspect-video bg-gray-200 overflow-hidden">
          <img
            src={moment.image}
            alt={moment.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span
              className={`text-[12px] px-2 py-1 rounded-full font-medium ${
                categoryColors[moment.category]
              }`}>
              {categoryLabels[moment.category]}
            </span>
            <span className="text-[12px] text-gray-500">
              {formatDate(moment.date)}
            </span>
          </div>
          <h3 className="font-semibold text-[16px] text-gray-800 mb-2 line-clamp-2">
            {moment.title}
          </h3>
          <span className="text-[14px] text-gray-600 leading-relaxed line-clamp-3">
            {moment.description}
          </span>
          {moment.tags && moment.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {moment.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
