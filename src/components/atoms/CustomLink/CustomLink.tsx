import Link, { LinkProps } from 'next/link'

type CustomLinkProps = {
  children?: React.ReactNode
} & LinkProps

export const CustomLink = ({ children, ...props }: CustomLinkProps) => {
  return (
    <Link
      {...props}
      className="text-base text-sec-500 transition duration-200 hover:text-prim-500"
    >
      {children}
    </Link>
  )
}
