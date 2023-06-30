import { CustomLink, Title } from '@/components/atoms'

const links = ['Home', 'Ferramenta', 'Preços', 'Contato']

export const MainLinks = () => {
  return (
    <section className='flex flex-col gap-8'>
      <Title classname='mb-6'>Links Principais</Title>
      {links.map((link) => (
        <CustomLink key={link} href={`#${link}`}>
          {link}
        </CustomLink>
      ))}
    </section>
  )
}
