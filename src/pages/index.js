import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle='Homepage'>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
      
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage