import { CustomLink, Title } from '@/components/atoms'

const links = ['Geração de Leads B2B', 'Geração de Leads em Software', 'Geração de Leads em Imobiliária', 'Cases de Sucesso']

export const Cases = () => {
  return (
    <section className='flex flex-col gap-8'>
      <Title classname='mb-6'>Cases</Title>
      {links.map((link) => (
        <CustomLink key={link} href={`#${link}`}>
          {link}
        </CustomLink>
      ))}
    </section>
  )
}
