import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { webAplications } from '../constants/AplicacoesWeb'
import { Logotipos } from '../constants/Logotipos'
import { Site } from '../constants/Sites'
import Button from './Button'
import Carousel from './Carousel'

const Projects = () => {

  const [viewProject, setViewProject] = useState(0)

  function SetProject(n: number, visible?: boolean){
    setViewProject(n)
    if(visible) toast.dark('Clique duas vezes para acessar o site')
  }

  return (
    <div className=''>
      <h2 className='text-center text-4xl font-bold text-white my-8'>Projetos</h2>
      <div className='flex flex-col max-w-[1200px] mx-auto gap-[1px]'>
        <Button onClick={() => SetProject(1)}>Logotipos</Button>
        {viewProject == 1 && (
          <Carousel element={Logotipos} />
        )}
        <Button onClick={() => SetProject(2, true)}>Sites</Button>
        {viewProject == 2 && (
          <Carousel element={Site} visible={true} />
        )}
        <Button onClick={() => SetProject(3, true)}>Aplicações web</Button>
        {viewProject == 3 && (
          <Carousel element={webAplications} visible={true} />
        )}
        <Button onClick={() => SetProject(4)}>Aplicativos mobile</Button>
        <Button onClick={() => SetProject(5)}>Thumbnail</Button>
      </div>
    </div>
  )
}

export default Projects