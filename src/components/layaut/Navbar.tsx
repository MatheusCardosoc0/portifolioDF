import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black w-full gap-2 flex flex-col-reverse md:flex-row pt-4 md:p-4 bg-cover justify-between h-[420px] lg:h-[500px] items-center md:items-start'
      style={{
        backgroundImage: 'url(/pexels-neo-2653362.jpg)',
        backgroundAttachment: 'fixed'
      }}>
      <div>
        <img src='/Matheus.png' className='md:w-[320px] w-[200px]' />
      </div>

      <div>
        <img src='/me2.png' className='rounded-full border-4 bg-gradient-to-tr from-teal-400 via-amber-500 to-green-500 bg-clip-border border-transparent md:w-[420px] w-[160px]' />
      </div>

      <ul className='flex text-2xl md:text-3xl text-white font-bold drop-shadow-[1px_1px_1px_teal]'>
        <li>
          <a className='drop-shadow-[3px_2px_1px_red] text-yellow-300 cursor-pointer hover:text-zinc-600'
            href='#about'>
            Sobre
          </a>
        </li>
        |
        <li>
          <a className='drop-shadow-[3px_2px_1px_red] text-yellow-300 cursor-pointer hover:text-zinc-600'
            href='#projects'>
            Projetos
          </a>
        </li>
        |
        <li>
          <a className='drop-shadow-[3px_2px_1px_red] text-yellow-300 cursor-pointer hover:text-zinc-600'
            href='#contact'>
            Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar