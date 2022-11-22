import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas'/>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Sit eiusmod et eiusmod Lorem irure cupidatat voluptate ullamco qui sit deserunt. Dolor laboris et elit aliquip culpa aute in eu aliqua.</p>
        <Link href={"/ninjas"} className={styles.btn}>
          See Ninja listing
        </Link>
      </div>
    </>
  )
}
