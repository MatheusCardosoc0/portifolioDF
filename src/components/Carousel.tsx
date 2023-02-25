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
    <motion.div ref={carousel} className='flex my-12 gap-2 items-center justify-center'
    drag={"x"}
     whileTap={{cursor: 'grab'}}
     dragConstraints={{right: 0, left: - width}}>
      {element.map(item => (
        <motion.button style={{backgroundImage: `url(/${item.image})`}}
         className={`w-[250px] h-[250px] bg-cover rounded-lg drop-shadow-[1px_1px_10px_teal] cursor-grabbing ${visible && 'w-[380px] bg-center cursor-pointer'} `}
         
         onClick={() => handleLink(item.link? item.link : '')}>

         {visible && ( <AiFillEye className='relative left-1/2 -translate-x-1/2 text-6xl text-white drop-shadow-[1px_1px_2px_black]' />)}

        </motion.button>
      ))}
    </motion.div>
  )
}

export default Carousel