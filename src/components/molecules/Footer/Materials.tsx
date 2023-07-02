import { CustomLink, Title } from '@/components/atoms'

const links = [
  'Blog',
  'Parceria com Agências',
  'Guia Definitivo do Marketing',
  'Materiais Gratuitos',
]

export const Materials = () => {
  return (
    <section className="flex flex-col gap-8">
      <Title classname="mb-6">Materiais</Title>
      {links.map((link) => (
        <CustomLink key={link} href={`#${link}`}>
          {link}
        </CustomLink>
      ))}
    </section>
  )
}
