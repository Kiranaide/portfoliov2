import { techStack } from '@/lib/utils'
import React from 'react'

const Skill = () => {
  return (
    <div className='border-2 border-blue-500 mx-auto max-w-2xl flex flex-col items-center justify-center space-y-8 my-8'>
        <h1 className='bold-64 text-red-blood font-unbounded'>Skill</h1>
        <div className='flex flex-wrap gap-8 justify-center'>
            {techStack.map((tech) => (
                <img src={tech.image} key={tech.name} alt={tech.name} className='w-auto h-16' />
            ))}
        </div>
    </div>
  )
}

export default Skill