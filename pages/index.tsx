import * as React from 'react'
import Layout from '../src/components/Layout'
import Title from '../src/components/Title'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
    <Layout title="ITB Menfess Website || by STEI 2021">
      <Title/>
    </Layout>
  )
}

export default IndexPage
