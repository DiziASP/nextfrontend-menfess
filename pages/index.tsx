import * as React from 'react'
import Layout from '../src/components/Layout'
import Title from '../src/components/Title'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
    <Layout title="STEI 2021 || Menfess Website ">
      <Title/>
    </Layout>
  )
}

export default IndexPage
