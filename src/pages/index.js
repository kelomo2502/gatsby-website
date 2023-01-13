import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import {img} from './index.module.css'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle='Homepage'>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <>
          <StaticImage className={img} src='https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg' alt='The image of a brown lady'

          />
          <StaticImage className={img} src='../images/face.jpg' alt='Beautiful woman'/>
        </>
      </Layout>
      
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage