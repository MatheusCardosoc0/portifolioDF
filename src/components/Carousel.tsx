import React, { useEffect, useRef, useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { motion } from 'framer-motion'

type Elements = {
  image?: string
  link?: string
}

interface CarouselProps{
  element: Elements[]
  visible?: boolean
}

const Carousel = ({element, visible}: CarouselProps) => {
  const carousel = useRef() as React.RefObject<HTMLDivElement>

  const [width, setWidth] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(Number(carousel.current?.scrollWidth) - Number(carousel.current?.offsetWidth))
  },[])

  function handleLink( link: string){

    
    if(visible && count == 2){
      window.open(link, '_blank');

      setCount(0)
    }

    setCount(prev => prev + 1)
  }

  return (
    <motion.div ref={carousel} className='flex flex-row my-12 gap-2 items-center justify-center flex-wrap'
    drag={"x"}
     whileTap={{cursor: 'grab'}}
     dragConstraints={{right: 0, left: - width}}>
      {element.map(item => (
        <motion.button style={{backgroundImage: `url(/${item.image})`}}
         className={`md:w-[350px] md:h-[250px] w-[200px] h-[200px] bg-contain bg-center bg-no-repeat rounded-lg drop-shadow-[1px_1px_10px_teal] cursor-grabbing ${visible && ' bg-center cursor-pointer w-[300px]'} group`}
         
         onClick={() => handleLink(item.link? item.link : '')}>

         {visible && ( <AiFillEye className='relative left-1/2 -translate-x-1/2 text-6xl text-white drop-shadow-[1px_1px_2px_black] group-hover:text-7xl group-hover:text-blue-400' />)}

        </motion.button>
      ))}
    </motion.div>
  )
}

export default Carousel