import type { NextPage } from 'next'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/layaut/Footer'
import Navbar from '../components/layaut/Navbar'

const Home: NextPage = () => {
  return (
    <div className='overflow-x-hidden'>
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
