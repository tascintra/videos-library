import Image from 'next/image'
import ComparativoImg from '@/assets/comparativo_img_CTA.png'
import SeloRd from '@/assets/selo_RD.png'
import NoCard from '@/assets/no-card-dark.webp'
import Rating from '@/assets/rating.webp'

export const PaymentFeatures = () => {
  return (
    <section className="bg-prim-50">
      <div className="m-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 pb-4 pt-12 lg:flex-row lg:pb-0 1.5xl:max-w-[1448px]">
        <Image
          src={ComparativoImg}
          alt="Comparativo CTA"
          className="lg-px-0 w-full lg:max-w-xl 1.5xl:max-w-2xl 2xl:max-w-full"
        />
        <div className="flex max-w-[620px] flex-col gap-5 divide-y-2">
          <div>
            <h3 className="text-2xl tracking-[-0.012em] text-prim-900 xs:text-3xl md:text-4xl lg:text-[2.5rem]">
              Pronto para triplicar sua{' '}
              <span className="block font-bold leading-snug tracking-normal">
                Geração de Leads?
              </span>
            </h3>
            <p className="mt-3 text-base xs:mt-0 xs:text-lg lg:text-[1.375rem]">
              Criação e ativação em <span className="font-bold">4 minutos</span>
              .
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-4 xs:flex-row">
              <button className="mt-6 max-h-14 w-full max-w-[264px] rounded-full border border-transparent bg-prim-400 px-6 py-3 font-semibold uppercase leading-none text-white transition duration-500 hover:border-prim-400 hover:bg-white hover:text-prim-400 sm:px-10 sm:py-5">
                Ver demonstração
              </button>
              <Image src={SeloRd} alt="Selo RD" className="h-14 w-36 xs:mt-6" />
            </div>
            <div className="flex flex-col gap-1 divide-prim-900 sm:flex-row sm:gap-3 sm:divide-x lg:flex-col lg:gap-1 lg:divide-x-0 1.5xl:flex-row 1.5xl:items-center 1.5xl:gap-3 1.5xl:divide-x">
              <div className="flex items-center gap-1 text-prim-900">
                <Image src={NoCard} alt="" className="h-4 w-4" />
                <p className="text-sm font-medium">
                  <span className="font-bold">Não</span> é necessário Cartão de
                  Crédito
                </p>
              </div>
              <div className="flex items-center gap-1 text-prim-900">
                <Image
                  src={Rating}
                  alt=""
                  className="sm:ml-3 lg:ml-0 1.5xl:ml-3"
                />
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
