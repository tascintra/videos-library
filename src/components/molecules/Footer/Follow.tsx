import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { Title } from '@/components/atoms'

const socialLinks = [
  {
    name: 'linkedin',
    icon: faLinkedinIn,
    href: 'https://www.linkedin.com/company/getleadster/',
  },
  {
    name: 'facebook',
    icon: faFacebookF,
    href: 'https://www.facebook.com/leadsterplatform?utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&utm_term=%7Bleadster%7D&utm_content=CJ_leadster&gad=1&gclid=CjwKCAjw44mlBhAQEiwAqP3eVu8jqmlps3u9S2rQ_cT2FHkfct-HTbckOXyx9m91TIWX6GVewKNYKBoC2wEQAvD_BwE',
  },
  {
    name: 'instagram',
    icon: faInstagram,
    href: 'https://www.instagram.com/leadster.com.br/?utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&utm_term=%7Bleadster%7D&utm_content=CJ_leadster&gad=1&gclid=CjwKCAjw44mlBhAQEiwAqP3eVu8jqmlps3u9S2rQ_cT2FHkfct-HTbckOXyx9m91TIWX6GVewKNYKBoC2wEQAvD_BwE',
  },
]

export const Follow = () => {
  return (
    <section className="flex flex-col gap-6">
      <Title classname="mb-1">Siga a Leadster</Title>
      <div className="mb-2 flex gap-4">
        {socialLinks.map(({ name, icon, href }) => (
          <Link
            key={name}
            href={href}
            target="_blank"
            className="rounded-full bg-sec-100 p-3 text-sec-500 transition duration-300 hover:bg-prim-300 hover:text-white"
          >
            <FontAwesomeIcon icon={icon} className="h-5 w-5" />
          </Link>
        ))}
      </div>
      <p className="text-sec-500">
        <span className="text-prim-800">E-mail:</span> contato@leadster.com.br
      </p>
      <p className="text-sec-500">
        <span className="text-prim-800">Telefone:</span> (42) 98828-9851
      </p>
    </section>
  )
}
