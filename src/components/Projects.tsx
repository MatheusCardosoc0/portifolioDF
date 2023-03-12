import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { webAplications } from '../constants/AplicacoesWeb'
import { Site } from '../constants/Sites'
import { Thumbnails } from '../constants/Thumbnail'
import Button from './Button'
import Carousel from './Carousel'

const Projects = () => {

  const [viewProject, setViewProject] = useState(0)
  const [count, setcount] = useState(0)

  function SetProject(n: number, visible?: boolean) {
    setViewProject(n)
    if (visible) {
      if (count == 0) {
        toast.warning('Clique duas vezes para visualizar os sites')
      }
      setcount(prev => prev + 1)
      if (count >= 3) {
        setcount(0)
      }
    }
  }

  return (
    <div className='mt-32 pb-32'>
      <h2 className='text-4xl font-bold underline decoration-amber-500 text-white drop-shadow-[1px_1px_30px_teal]'>
        <p className='drop-shadow-[1px_1px_30px_yellow] text-center mb-20' id='projects'>
          Projetos
        </p>
      </h2>
      <div className='flex flex-col max-w-[1200px] mx-auto gap-[1px]'>
        <Button onClick={() => SetProject(1)} stylish='rounded-t-full'>
          Aplicações web
        </Button>
        {viewProject == 1 && (
          <Carousel element={webAplications} visible />
        )}
        <Button onClick={() => SetProject(2, true)}>
          Sites
        </Button>
        {viewProject == 2 && (
          <Carousel element={Site} visible={true} />
        )}
        {viewProject == 4 && (
          <Carousel element={Thumbnails} />
        )}
        <Button onClick={() => SetProject(4)} stylish="rounded-b-full">
          Desings
        </Button>
      </div>
    </div>
  )
}

export default Projects