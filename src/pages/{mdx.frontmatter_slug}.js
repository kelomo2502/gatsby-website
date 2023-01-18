import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/seo'

const BlogPost = () => {
  return (
    <Layout pageTitle="Super cool blog post">
        <p>My cool post goes here</p>
    </Layout>
  )
}

export const Head = ()=> <Seo title="Super cool blog post"/>

export default BlogPost