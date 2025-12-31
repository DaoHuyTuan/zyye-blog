import { Company } from '~/utils/constants'
import { FiHelpCircle } from 'react-icons/fi'

interface Props {
  company: Company
}

export const CompanyCard = ({ company }: Props) => {
  return (
    <div className="flex flex-row gap-4 items-center py-4 border-b border-gray-200 group cursor-pointer">
      <img
        src={company.logo}
        alt={company.label}
        className="w-[100px] h-[100px] rounded-[20px] object-cover bg-[#e5c15a] flex-shrink-0"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[20px] relative after:content-[''] after:absolute after:left-0 after:right-0 after:h-[1px] after:bg-black after:opacity-0 group-hover:after:opacity-100 after:bottom-[-2px] after:transition-all">
              {company.label}
            </span>
            <FiHelpCircle className="text-gray-400 mt-[2px]" />
          </div>
          <span
            className="text-[12px] pb-1 text-right relative
            after:content-[''] after:absolute after:left-0 after:right-0 after:h-[1px] after:bg-black after:opacity-0 group-hover:after:opacity-100 after:bottom-[-2px] after:transition-all">
            {company.time}
          </span>
        </div>
        <div className="mt-2 text-[14px] text-gray-800 leading-7">
          {company.description}
        </div>
      </div>
    </div>
  )
}
