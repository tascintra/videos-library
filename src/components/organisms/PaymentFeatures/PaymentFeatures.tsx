import Image from 'next/image'
import ComparativoImg from '@/assets/comparativo_img_CTA.png'
import SeloRd from '@/assets/selo_RD.png'
import NoCard from '@/assets/no-card-dark.webp'
import Rating from '@/assets/rating.webp'

export const PaymentFeatures = () => {
  return (
    <section className="bg-prim-50">
      <div className="m-auto flex w-full max-w-[1452px] grid-cols-3 items-center gap-4 justify-between px-4 pt-12">
        <Image src={ComparativoImg} alt="Comparativo CTA" className='w-full' />
        <div className="flex max-w-[620px] flex-col gap-5 divide-y-2">
          <div>
            <h3 className="text-xl tracking-[-0.012em] text-prim-900 xs:text-2xl sm:text-[2.5rem]">
              Pronto para triplicar sua{' '}
              <span className="block font-bold leading-snug tracking-normal">
                Geração de Leads?
              </span>
            </h3>
            <p className="text-[1.375rem]">
              Criação e ativação em <span className="font-bold">4 minutos</span>
              .
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="mt-6 max-h-[4.25rem] w-full max-w-[264px] rounded-full border border-transparent bg-prim-400 px-10 py-5 font-semibold uppercase text-white transition duration-500 hover:border-prim-400 hover:bg-white hover:text-prim-400">
              Ver demonstração
            </button>
            <Image src={SeloRd} alt="Selo RD" className="mt-6" />
            <div className="flex items-center gap-3 divide-x divide-prim-900">
              <div className="flex items-center gap-1 text-prim-900">
                <Image src={NoCard} alt="" className="h-4 w-4" />
                <p className="text-sm font-medium">
                  <span className="font-bold">Não</span> é necessário Cartão de
                  Crédito
                </p>
              </div>
              <div className="flex items-center gap-1 text-prim-900">
                <Image src={Rating} alt="" className="ml-3" />
                <p className="text-sm font-medium">
                  <span className="font-bold">4.9</span>/5 média de satisfação
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
