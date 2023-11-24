import { expSkill } from '@/lib/utils'
import React from 'react'

const About = () => {
  return (
    <div className='max-h-[800px] relative overflow-hidden my-8 bg-white border-2 border-blue-500 flex flex-row font-montserrat'>
        <div className='pb-8'>
            {expSkill.map((list , index) => (
                <p className={`big-stroke whitespace-nowrap ${index % 2 === 0 ? "animate-toLeft" : "animate-toRight"}`} key={list.skill}>
                    {`${list.skill} ${list.skill}`}
                </p>
            ))}
        </div>
        <div className='z-10 absolute flex items-center justify-center inset-0'>
            <div className='rounded-3xl bg-lavender-blue p-20 flex flex-col text-center space-y-4 max-w-5xl animate-popUpReverse hover:animate-popUp'>
                <h5 className='bold-32'>About Me</h5>
                <p className='regular-24'>With a lot of motivation to learn anything and gaining experience. I am skilled with tools such as Figma for UI/UX, Adobe software for graphic designer and I can code HTML, JS, CSS.</p>
            </div>
        </div>
        <div className='absolute flex items-center justify-center inset-0'>
            <div className='bg-black max-w-5xl p-20 flex flex-col text-center space-y-4 rounded-3xl'>
                <h5 className='bold-32'>About Me</h5>
                <p className='regular-24'>With a lot of motivation to learn anything and gaining experience. I am skilled with tools such as Figma for UI/UX, Adobe software for graphic designer and I can code HTML, JS, CSS.</p>
            </div>
        </div>
    </div>
  )
}

export default About