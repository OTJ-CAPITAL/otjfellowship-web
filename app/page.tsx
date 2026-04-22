import Navigation from '@/components/shared/Navigation'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/fellowship/Hero'
import NotASchool from '@/components/fellowship/NotASchool'
import Disciplines from '@/components/fellowship/Disciplines'
import Stages from '@/components/fellowship/Stages'
import Apply from '@/components/fellowship/Apply'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <NotASchool />
      <Disciplines />
      <Stages />
      <Apply />
      <Footer />
    </main>
  )
}
