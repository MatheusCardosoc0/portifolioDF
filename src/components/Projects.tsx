import React, { useState } from 'react'
import Button from './Button'

const Projects = () => {

  const [viewProject, setViewProject] = useState(0)

  console.log(viewProject)

  return (
    <div className=''>
      <h2 className='text-center text-4xl font-bold text-white my-8'>Projetos</h2>
      <div className='flex flex-col max-w-[1200px] mx-auto gap-[1px]'>
        <Button onClick={() => setViewProject(1)}>Logotipos</Button>
        {viewProject == 1 && (
          <div className='text-4xl'>
            
          </div>
        )}
        <Button onClick={() => setViewProject(2)}>Sites</Button>
        <Button onClick={() => setViewProject(3)}>Aplicações</Button>
        <Button onClick={() => setViewProject(4)}>Aplicativos mobile</Button>
        <Button onClick={() => setViewProject(5)}>Thumbnail</Button>
      </div>
    </div>
  )
}

export default Projects