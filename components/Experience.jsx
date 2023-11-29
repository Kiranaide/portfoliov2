import { experience } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'

const DateExperience = (timeStamp) => {
    const date = new Date(timeStamp)
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'long',})
}

const Experience = () => {
  return (
    <div className='mx-auto max-w-[1440px]'>
        <div className='border-2 border-blue-500 w-full h-full font-montserrat flex flex-col items-center justify-center my-8 space-y-8'>
            <h1 className='font-unbounded text-red-blood bold-64'>Work Experience</h1>
            <div className='flex flex-row gap-8 justify-between'>
                {experience.map((list) => (
                    <div key={list.name} className='flex flex-col items-center text-center space-y-1 bg-white rounded-2xl max-w-lg p-4'>
                        <Image alt={list.name} src={list.image} width={64} height={64} />
                        <h2 className='bold-20'>{list.name}</h2>
                        <h4 className='regular-14'>{DateExperience(list.start)} - {list.end ? DateExperience(list.end) : "Present"}</h4>
                        <h3 className='medium-16'>{list.jobs}</h3>
                        <p className='regular-16'>{list.doing}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience