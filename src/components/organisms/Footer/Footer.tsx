import Image from 'next/image'
import LeadsterLogo from '@/assets/logo.png'
import {
  MainLinks,
  Cases,
  Materials,
  Follow,
  FooterBar,
} from '@/components/molecules'

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className="flex w-full flex-col items-center">
      <div className="my-14">
        <Image src={LeadsterLogo} alt="Leadster Logo" width={270} height={60} />
        <p className="max-w-[270px] text-[0.952rem] text-sec-500">
          Transformando visitantes em clientes.
        </p>
      </div>
      <div className="mb-20 grid w-full max-w-6xl grid-cols-1 justify-between gap-8 px-4 sm:grid-cols-2 lg:flex">
        <MainLinks />
        <Cases />
        <Materials />
        <Follow />
      </div>
      <FooterBar />
    </footer>
  )
}
