import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { img } from './index.module.css'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle='Homepage'>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        
          <StaticImage className={img} src='../images/face.jpg' alt='Beautiful woman'/>
      </Layout>
      
    </main>
  )
}

export const Head = () => <Seo title="Home Page"/>  //<title>Home Page</title>

export default IndexPage