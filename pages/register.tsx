import * as React from 'react'
import Layout from '../src/components/Layout'
import FillFess from '../src/components/FillFess'
import { NextPage } from 'next'

const InputPage: NextPage = () => {
  return (
    <Layout title="STEI 2021 || Input Menfess ">
      <FillFess/>
    </Layout>
  )
}

export default InputPage
