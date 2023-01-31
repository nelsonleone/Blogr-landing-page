import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import MainSection from '@/components/MainSection'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frontend Mentor | [Blogr]</title>
      </Head>
      <MainSection />
    </>
  )
}
