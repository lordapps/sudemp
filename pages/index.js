import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
 <>

    <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas"/>
    </Head>
        <div>

      <h1 className={styles.title}>home page header</h1>
      <p className={styles.text}>pragraph text 1 </p>

      <Link href="/ninjas" >
        <a className={styles.btn}>See Ninga Listing</a>
      </Link>
     

     
    </div>
    </>
  )
}
