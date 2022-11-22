import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar () {
  return (
    <nav>
        <div className='logo'>
            <Image alt='logo' src={'/logo.png'} width={128} height={77}/>
        </div>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/ninjas"}>Ninja Listing</Link>
    </nav>
  )
}
