import { CustomLink, Title } from '@/components/atoms'

interface IFooterWidget {
  title: string
  links: Array<string>
}

export const FooterWidget = ({ title, links }: IFooterWidget) => {
  return (
    <section className="flex flex-col gap-8">
      <Title classname="lg:mb-6">{title}</Title>
      {links.map((link) => (
        <CustomLink key={link} href={`#${link}`}>
          {link}
        </CustomLink>
      ))}
    </section>
  )
}
