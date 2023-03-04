import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner/Banner'
import Navbar from '../components/navbar/Navbar'
import Main from '../components/main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Readers Hub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner />
        <Main />
      </main>
        
    </div>
  )
}
