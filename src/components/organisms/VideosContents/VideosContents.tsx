import { FilterMenu, VideoCard } from '@/components/molecules'

interface VideosContentsProps {}

export const VideosContents = ({}:VideosContentsProps) => {
  return (
    <section>
      <FilterMenu />
      <div>
        <VideoCard />
      </div>
      Pagination
    </section>
  )
}
