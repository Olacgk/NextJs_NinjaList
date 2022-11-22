import Link from 'next/link'
import React, {useEffect} from 'react'
import { useRouter } from 'next/router'

export default function Notfound() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() =>{
            router.push('/');
        }, 3000)
    }, [])

  return (
    <div className='not-found'>
        <h1>Oooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>Go back to the <Link href={"/"}>Homepage</Link></p>
    </div>
  )
}