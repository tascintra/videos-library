import {
  Tooltip,
  MainTitle,
  LineSeparator,
  Subtitle,
} from '@/components/molecules'

export const Banner = () => {
  return (
    <section className="flex flex-col items-start xs:items-center justify-center bg-prim-50 px-4 pb-[176px] pt-[156px]">
      <Tooltip>Webinars Exclusivos</Tooltip>
      <MainTitle />
      <LineSeparator />
      <Subtitle />
    </section>
  )
}
