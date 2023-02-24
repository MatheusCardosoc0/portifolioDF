import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center gap-8'>
      <h2 className='text-4xl font-bold underline decoration-amber-500 text-white drop-shadow-[1px_1px_30px_teal]'>
        <p className='drop-shadow-[1px_1px_30px_yellow]'>
          Sobre
        </p>
      </h2>

      <div className='flex flex-col gap-12 p-4 text-lg drop-shadow-[1px_1px_30px_teal] font-bold text-gray-200 text-justify max-w-[700px]'>
        <p className='drop-shadow-[1px_1px_30px_yellow] '>
          Olá, sou Matheus Cardoso Luiz Costa, tenho conhecimento em desenvolvimento web, backend e mobile com javascript e suas tecnólogias, wordpress e desing, atualmente curso ánalise e desenvolvimento de sistemas na uninter e estou no 2 periodo.
        </p>
        <p className='drop-shadow-[1px_1px_30px_yellow]'>
          Além disso também sou entusiasta do desing, sei fazer logotipos e thumbnails utilizando canva e iteligências artificiais.
        </p>
        <p className='drop-shadow-[1px_1px_30px_yellow]'>
          Quanto a banco de dados sei utilizar postgreseql, e como ORM sei sobre o Prisma.
        </p>
        <p className='drop-shadow-[1px_1px_30px_yellow]'>
          No CSS, além de sua forma tradicional sei utilizar saas, styled components e tailwindcss.
        </p>
        <p className='drop-shadow-[1px_1px_30px_yellow]'>
          Nas bibliotecas do reactjs sei redux toolkit, motion e context-api
        </p>
        <p className='drop-shadow-[1px_1px_30px_yellow] text-center mt-4 text-xl text-white'>
          Sou uma pessoa com foco e determinação, estou sempre pronto para aprender algo novo e atuar com minhas habilidades para resolver problemas.
        </p>
      </div>
    </div>
  )
}

export default About