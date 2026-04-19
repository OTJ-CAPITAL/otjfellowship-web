import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Program from '@/components/sections/Program'
import Apply from '@/components/sections/Apply'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Program />
      <Apply />
      <Footer />
    </main>
  )
}
