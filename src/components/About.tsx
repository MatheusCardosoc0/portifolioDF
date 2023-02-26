import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center gap-8'>
      <h2 className='text-3xl md:text-4xl font-bold underline decoration-amber-500 text-white drop-shadow-[1px_1px_30px_teal]'>
        <p className='drop-shadow-[1px_1px_30px_yellow]' id='about'>
          Sobre
        </p>
      </h2>

      <div className='flex flex-col gap-12 p-4 text-md md:text-xl drop-shadow-[1px_1px_30px_teal] font-bold text-gray-200 text-justify max-w-[700px]'>
        <p className=''>
          Olá, sou Matheus Cardoso Luiz Costa, tenho conhecimento em desenvolvimento web, backend e mobile com javascript e suas tecnólogias, wordpress e desing, atualmente curso ánalise e desenvolvimento de sistemas na uninter e estou no 2 periodo.
        </p>
        <ul className='flex flex-col gap-8 list-disc'>
          <li className='text-yellow-500 text-3xl'>
            <p className='text-white text-base md:text-xl'>
              Além disso também sou entusiasta do desing, sei fazer logotipos e thumbnails, com photoshop, illustrator e outros recursos.
            </p>
          </li>
          <li className='text-yellow-500 text-3xl'>
            <p className='text-white text-base md:text-xl'>
              Quanto a banco de dados sei utilizar postgresql, e como ORM sei sobre o Prisma.
            </p>
          </li>
          <li className='text-yellow-500 text-3xl'>
            <p className='text-white text-base md:text-xl'>
              No CSS, além de sua forma tradicional sei utilizar saas, styled components e tailwindcss.
            </p>
          </li>
          <li className='text-yellow-500 text-3xl'>
            <p className='text-white text-base md:text-xl'>
              Nas bibliotecas do reactjs sei redux toolkit, framer-motion e context-api
            </p>
          </li>
        </ul>
        <p className=' text-center mt-4 text-xl md:text-2xl text-white'>
          Sou uma pessoa com foco e determinação, estou sempre pronto para aprender algo novo e atuar com minhas habilidades para resolver problemas.
        </p>
      </div>
    </div>
  )
}

export default About