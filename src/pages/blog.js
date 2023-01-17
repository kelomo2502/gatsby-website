import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/seo'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle='My Blog Post'>
      {data.allMdx.nodes.map(node=>(
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>{node.frontmatter.date}</p>
        </article>
  ))}
    </Layout>
  )
  
}

export const query = graphql`
query{
  allMdx(sort:{frontmatter:{date:DESC}}){
  nodes{
      body
      frontmatter{
        title
        date(formatString: "MMMM DD, YYYY")
      }
      id
      excerpt
  	} 
  }
}
`

export const Head = () => <Seo title='My Blog Posts'/>

export default BlogPage