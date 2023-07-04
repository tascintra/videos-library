import Image from 'next/image'
import LeadsterLogo from '@/assets/leadster-logo.png'
import { Follow, FooterBar, FooterWidget } from '@/components/molecules'

const footerLinks = [
  {
    title: 'Links Principais',
    links: ['Home', 'Ferramenta', 'Preços', 'Contato'],
  },
  {
    title: 'Cases',
    links: [
      'Geração de Leads B2B',
      'Geração de Leads em Software',
      'Geração de Leads em Imobiliária',
      'Cases de Sucesso',
    ],
  },
  {
    title: 'Materiais',
    links: [
      'Blog',
      'Parceria com Agências',
      'Guia Definitivo do Marketing',
      'Materiais Gratuitos',
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center">
      <div className="my-14">
        <Image src={LeadsterLogo} alt="Leadster Logo" width={270} height={60} />
        <p className="max-w-[270px] text-[0.952rem] text-sec-500">
          Transformando visitantes em clientes.
        </p>
      </div>
      <div className="mb-20 grid w-full max-w-6xl grid-cols-1 justify-between gap-8 px-4 sm:grid-cols-2 lg:flex">
        {footerLinks.map(({ title, links }) => (
          <FooterWidget key={title} title={title} links={links} />
        ))}
        <Follow />
      </div>
      <FooterBar />
    </footer>
  )
}
