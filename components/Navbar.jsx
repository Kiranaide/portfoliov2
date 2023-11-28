import { navbar } from '@/lib/utils'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='mx-auto max-w-[1440px]'>
        <nav className='my-4 text-red-blood flex flex-row items-center justify-between'>
            <div>
                <h1 className='font-unbounded bold-52'>KRND</h1>
            </div>
            <ul className='font-montserrat regular-18 flex flex-row gap-12'>
                {navbar.map((link) => (
                    <Link href={link.href} key={link.key} className='hover:bg-circle hover:bg-no-repeat'>
                        {link.label}
                    </Link>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar