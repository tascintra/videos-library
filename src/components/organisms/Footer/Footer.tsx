import { Cases, Follow, MainLinks, Materials } from '@/components/molecules'

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer>
      <MainLinks />
      <Cases />
      <Materials />
      <Follow />
    </footer>
  )
}
