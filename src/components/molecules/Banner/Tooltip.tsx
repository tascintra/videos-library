interface TooltipProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode
}

export const Tooltip = ({ children }: TooltipProps) => {
  return (
    <div className="inline-block rounded-custom border-2 border-prim-500 px-5 py-[6px] text-xs font-bold uppercase text-prim-500 xs:text-sm">
      {children}
    </div>
  )
}
