import React, { Ref, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type Elements = {
  image?: string
  title?: string
}

interface CarouselProps{
  element: Elements[]
  visible?: boolean
}

const Carousel = ({element, visible}: CarouselProps) => {
  const carousel = useRef() as React.RefObject<HTMLDivElement>

  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(Number(carousel.current?.scrollWidth) - Number(carousel.current?.offsetWidth))
  },[])

  return (
    <motion.div ref={carousel} className='flex my-12 gap-2 items-center justify-center'
    drag={"x"}
     whileTap={{cursor: 'grab'}}
     dragConstraints={{right: 0, left: - width}}>
      {element.map(item => (
        <motion.div style={{backgroundImage: `url(/${item.image})`}}
         className="w-[250px] h-[250px] bg-cover rounded-lg drop-shadow-[1px_1px_10px_teal] cursor-grabbing">

        </motion.div>
      ))}
    </motion.div>
  )
}

export default Carousel