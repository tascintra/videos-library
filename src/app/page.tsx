import { Header } from '@/components/atoms'
import { Banner } from '@/components/molecules'
import { VideosContents, PaymentFeatures, Footer } from '@/components/organisms'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <VideosContents />
        <PaymentFeatures />
      </main>
      <Footer />
    </>
  )
}
