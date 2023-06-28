import Image from 'next/image'
import LeadsterLogo from '@/assets/logo.png'

export const Header = () => {
  return (
    <header className="flex items-center justify-center py-11">
      <Image
        className="cursor-pointer"
        src={LeadsterLogo}
        alt="Leadster Logo"
      />
    </header>
  )
}
