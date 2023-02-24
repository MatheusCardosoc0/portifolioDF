import type { NextPage } from 'next'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../layaut/Footer'
import Navbar from '../layaut/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />

      <main className='bg-zinc-900 h-full w-full p-4'>
        <About />
        <Projects />
      </main>

      <Footer />
    </div>
  )
}

export default Home
