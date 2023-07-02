import Link from 'next/link'

export const FooterBar = () => {
  return (
    <section className="w-full border-t py-5 sm:py-10">
      <div className="flex max-w-6xl flex-col justify-between gap-3 px-4 sm:m-auto sm:flex-row sm:items-center sm:gap-5">
        <p className="text-sm text-prim-600">
          Copyright © 2015 - 2022 Todos os direitos reservados |{' '}
          <Link href="#Leadster" className="text-prim-500">
            Leadster
          </Link>
        </p>
        <p className="text-sm text-sec-500">
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
          Termos de uso
        </p>
      </div>
    </section>
  )
}
