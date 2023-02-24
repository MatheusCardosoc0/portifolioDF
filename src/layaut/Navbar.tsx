import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black w-full flex p-4 bg-cover justify-between h-[300px]'
      style={{
        backgroundImage: 'url(/pexels-neo-2653362.jpg)',
        backgroundAttachment: 'fixed'
      }}>
      <img src='/Matheus.png' className='w-[320px] ' />

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