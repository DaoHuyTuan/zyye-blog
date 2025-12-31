import { json } from '@remix-run/node'
import { useLoaderData, useNavigation } from '@remix-run/react'
import { BlogItem } from '~/components/BlogItem'
import { Loading } from '~/components/Loading'
import { ClientOnly } from '~/components/ClientOnly'
import { getMoments } from '~/utils/moments.server'
import { Moment } from '~/utils/constants'

export const loader = async () => {
  const moments = await getMoments()
  return json({ moments })
}

export default function Moments() {
  const { moments } = useLoaderData<{ moments: Moment[] }>()

  return (
    <ClientOnly
      fallback={
        <div className="flex flex-col pt-[10px] gap-[20px] px-[20px]">
          {moments.map(moment => (
            <div
              key={moment.id}
              className="cursor-pointer">
              <div className="text-[#2b2b2b] relative text-[14px] after:bg-[#2b2b2b] after:h-[1px] after:w-full after:absolute after:left-0 after:bottom-[-3px]">
                {moment.title}
              </div>
              {moment.tags && moment.tags.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {moment.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[12px] text-[white] bg-[#2b2b2b] px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      }>
      <MomentsContent moments={moments} />
    </ClientOnly>
  )
}

function MomentsContent({ moments }: { moments: Moment[] }) {
  const navigation = useNavigation()
  const isLoading =
    navigation.state === 'loading' || navigation.state === 'submitting'

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="flex flex-col pt-[10px] gap-[20px] px-[20px]">
      {moments.map(moment => (
        <BlogItem
          title={moment.title}
          slug={moment.id}
          category="moments"
          tags={moment.tags || []}
          key={moment.id}
        />
      ))}
    </div>
  )
}
