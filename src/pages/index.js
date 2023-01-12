import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle='Homepage'>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage src='https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg'alt='The image of a brown lady'/>
      </Layout>
      
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage