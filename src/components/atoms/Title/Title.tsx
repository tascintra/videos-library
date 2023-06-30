import clsx from 'clsx'

interface TitleProps {
  children?: React.ReactNode
  classname?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export const Title = ({ children, classname, as = 'p' }: TitleProps) => {
  const Comp = as

  const titleStyles = {
    std: 'text-lg text-prim-800 font-semibold',
  }

  return <Comp className={clsx(titleStyles.std, classname)}>{children}</Comp>
}
