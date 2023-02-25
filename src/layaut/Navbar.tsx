import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black w-full flex p-4 bg-cover justify-between h-[320px] lg:h-[500px]'
      style={{
        backgroundImage: 'url(/pexels-neo-2653362.jpg)',
        backgroundAttachment: 'fixed'
      }}>
      <div>
        <img src='/Matheus.png' className='w-[320px] ' />
      </div>

      <div>
        <img src='/me2.png' className='rounded-full border-4 bg-gradient-to-tr from-teal-400 via-amber-500 to-green-500 bg-clip-border border-transparent w-[420px]' />
      </div>

      <ul className='flex text-3xl text-white font-bold drop-shadow-[1px_1px_1px_teal]'>
        <li>
          <a className='drop-shadow-[3px_2px_1px_red] text-yellow-300 cursor-pointer hover:text-zinc-600'>
            Sobre
          </a>
        </li>
        |
        <li>
          <a className='drop-shadow-[3px_2px_1px_red] text-yellow-300 cursor-pointer hover:text-zinc-600'>
            Projetos
          </a>
        </li>
        |
        <li>
          <a className='drop-shadow-[3px_2px_1px_red] text-yellow-300 cursor-pointer hover:text-zinc-600'>
            Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar