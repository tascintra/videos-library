import Link, { LinkProps } from 'next/link'

type CustomLinkProps = {
  children?: React.ReactNode
} & LinkProps

export const CustomLink = ({ children, ...props }: CustomLinkProps) => {
  return (
    <Link
      {...props}
      className="max-w-fit text-base text-sec-500 transition duration-500 hover:text-prim-500"
    >
      {children}
    </Link>
  )
}
