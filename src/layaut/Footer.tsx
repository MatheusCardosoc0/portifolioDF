import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className=' p-4 bg-gradient-to-t from-teal-400 to-black items-center'>
      <h2 className='text-4xl font-bold underline decoration-amber-500 text-white drop-shadow-[1px_1px_30px_teal]'>
        <p className='drop-shadow-[1px_1px_30px_yellow] text-center mb-4'>
          Contato
        </p>
      </h2>
      <div className='flex justify-between'>
        <div className='text-xl text-white font-bold drop-shadow-[1px_1px_1px_black] flex flex-col gap-2'>
          <p>
            Rua 42 E Quadra 74 Lote 29
          </p>
          <p>
            matheuscardosooffice@gmail.com
          </p>
          <p>
            (62) 99604-2564
          </p>
        </div>

        <div className='flex text-5xl gap-4'>
          <a href='https://www.linkedin.com/in/matheus-cardoso-026488244' target={"_blank"}>
            <AiFillLinkedin className='text-[#0e76a8] bg-white rounded-lg' />
          </a>
          <a href='https://github.com/MatheusCardosoc0' target={"_blank"}>
            <AiFillGithub className='bg-white rounded-lg' />
          </a>
          <a href='https://wa.me/62996042564' target={"_blank"}>
            <AiOutlineWhatsApp className='text-[#34af23] bg-white rounded-lg' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer